import Header from "../../components/Header";
import Post from "../../components/Post";
import PostField from "../../components/PostField";
import styles from "./styles.module.css";
// type FeedPageProps = {}

export default function FeedPage() {
  return (
    <div>
      <Header />
      <div className={styles.feedContainer}>
        {/* Caixa de postagem */}
        <PostField />
        {/* Posts */}
        <Post />
      </div>
    </div>
  );
}
