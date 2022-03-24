import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import PostItem from "../../components/PostItem";
import PostField from "../../components/PostField";
import { Post } from "../../models/post";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";
// type FeedPageProps = {}

type FeedResponse = {
  posts: Post[];
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { request, response, error, clear } = useFetch<any>();

  const updatePostList = useCallback(() => {
    request("/api/v1/post");
  }, [request]);

  const updatePost = async (post: Post) => {
    request(`/api/v1/post/${post.id}`);
  };

  useEffect(() => {
    console.log("feed ", error, response);
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

  return (
    <div>
      <Header />
      <div className={styles.feedContainer}>
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
      </div>
    </div>
  );
}
