import Box from "../Box";
import ButtonIconText from "../ButtonIconText";
import Comment from "../Comment";
import UserPhoto from "../UserPhoto";
import icComment from "../../assets/ic_comment.svg";
import icLike from "../../assets/ic_like.svg";
import styles from "./styles.module.css";
import { Post } from "../../models/post";
type PostProps = {
  post: Post;
};

export default function PostItem({ post }: PostProps) {
  return (
    <Box className={styles.container}>
      {/* Dados do usuário */}
      <div className={styles.userData}>
        <UserPhoto />
        <div>
          <div>Nome do Usuário</div>
          {/* <span>Ontem às 14:00</span> */}
          <span>{post.createdAt}</span>
        </div>
      </div>
      {/* Text do post */}
      <div className={styles.postText}>{post.text}</div>
      <hr />
      {/* Botões de curtir e comentar */}
      <div className={styles.buttonLikeComment}>
        <ButtonIconText icon={icLike} label="Curtir" />
        <ButtonIconText icon={icComment} label="Comentar" />
      </div>
      <hr />
      {/* <Comment /> */}
    </Box>
  );
}
