import Box from "../Box";
import ButtonIconText from "../ButtonIconText";
import Comment from "../Comment";
import UserPhoto from "../UserPhoto";
import icComment from "../../assets/ic_comment.svg";
import icLike from "../../assets/ic_like.svg";
import styles from "./styles.module.css";
// type PostProps = {}

export default function Post() {
  return (
    <Box className={styles.container}>
      {/* Dados do usuário */}
      <div className={styles.userData}>
        <UserPhoto />
        <div>
          <div>Nome do Usuário</div>
          <span>Ontem às 14:00</span>
        </div>
      </div>
      {/* Text do post */}
      <div className={styles.postText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
        nisl quis purus ultricies placerat vel vitae felis. Morbi fermentum
        rhoncus orci, nec dictum nunc efficitur et. Quisque ante elit, eleifend
        sit amet est quis, sagittis molestie odio. Morbi nec turpis nec tortor
        rutrum tempus et vitae risus.
      </div>
      <hr />
      {/* Botões de curtir e comentar */}
      <div className={styles.buttonLikeComment}>
        <ButtonIconText icon={icLike} label="Curtir" />
        <ButtonIconText icon={icComment} label="Comentar" />
      </div>
      <hr />
      <Comment />
    </Box>
  );
}
