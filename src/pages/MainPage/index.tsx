import { useCallback, useEffect, useState } from "react";

import FeedTab from "./FeedTab";
import FriendsTab from "./FriendsTab";
import Header from "../../components/Header";
import { Post } from "../../models/post";
import PostField from "../../components/PostField";
import PostItem from "../../components/PostItem";
import SearchItem from "../../components/SearchItem";
import SearchTab from "./SearchTab";
import { TabItem } from "../../components/Header/Tab";
import { User } from "../../models/user";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";

// type FeedPageProps = {}

type FeedResponse = {
    posts: Post[];
};

export default function MainPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const { request, response, error, clear } = useFetch<any>();
    const [searchResultUsers, setSearchResultUsers] = useState<User[]>([]);
    const [tab, setTab] = useState<TabItem>(TabItem.Feed);

    const updatePostList = useCallback(() => {
        request("/api/v1/post");
    }, [request]);

    const updatePost = async (post: Post) => {
        request(`/api/v1/post/${post.id}`);
    };

    useEffect(() => {
        if (error) {
            console.log("updatePostList error: ", error);
        } else if (response) {
            if (response.posts) {
                setPosts(response.posts);
            } else if (response.post) {
                const post = posts.find((p) => p.id === response.post.id);
                if (post) {
                    const index = posts.indexOf(post);
                    setPosts((prevPosts) => {
                        return prevPosts.splice(index, 1, response.post);
                    });
                }
            }
        }
        clear();
    }, [response, error, posts, clear]);

    useEffect(() => {
        updatePostList();
    }, [updatePostList]);

    useEffect(() => {
        if (tab !== TabItem.Search && searchResultUsers.length > 0) {
            setTab(TabItem.Search);
        }
    }, [searchResultUsers, setSearchResultUsers, tab]);

    const handleOnTabChanged = (clickedTab: TabItem) => {
        if (tab !== clickedTab) {
            setSearchResultUsers([]);
            setTab(clickedTab);
        }
    };

    return (
        <div>
            <Header
                tab={tab}
                onTabChanged={handleOnTabChanged}
                onSearchResult={setSearchResultUsers}
            />
            <div className={styles.feedContainer}>
                {searchResultUsers.length === 0 ? (
                    <>
                        {tab === TabItem.Feed ? (
                            <FeedTab
                                updatePost={updatePost}
                                updatePostList={updatePostList}
                                posts={posts}
                            />
                        ) : (
                            <FriendsTab />
                        )}
                    </>
                ) : (
                    <SearchTab searchResultUsers={searchResultUsers} />
                )}
            </div>
        </div>
    );
}
