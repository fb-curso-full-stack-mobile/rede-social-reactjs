import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
// type CommentProps = {}

export default function Comment() {
  return (
    <div className={styles.container}>
      <UserPhoto small />
      <div>
        <div>Nome do usuário</div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      </div>
    </div>
  );
}
