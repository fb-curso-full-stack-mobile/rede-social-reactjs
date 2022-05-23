import { Post } from "../../../models/post";
import PostField from "../../../components/PostField";
import PostItem from "../../../components/PostItem";
import React from "react";

export interface FeedTabProps {
    updatePostList: () => void;
    posts: Post[];
    updatePost: (post: Post) => void;
}

const FeedTab = ({ updatePostList, posts, updatePost }: FeedTabProps) => {
    return (
        <>
            {/* Caixa de postagem */}
            <PostField onNewPost={updatePostList} />
            {/* Posts */}
            {posts.map((post) => (
                <PostItem
                    key={`post-item-${post.id}`}
                    post={post}
                    onPostUpdated={updatePost}
                />
            ))}
        </>
    );
};

export default FeedTab;
