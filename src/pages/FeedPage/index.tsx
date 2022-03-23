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
  const { request, response, error } = useFetch<FeedResponse>();

  const updatePostList = useCallback(() => {
    request("/api/v1/post");
  }, [request]);

  useEffect(() => {
    if (error) {
      console.log("updatePostList error: ", error);
    } else if (response) {
      setPosts(response.posts);
      console.log(response.posts);
    }
  }, [response, error]);

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
          <PostItem key={`post-item-${post.id}`} post={post} />
        ))}
      </div>
    </div>
  );
}
