import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
import userNoPhoto from "../../assets/user_no_photo.svg";
// type PostFieldProps = {}

export default function PostField() {
  return (
    <div className={styles.container}>
      <UserPhoto />
      <input placeholder="No que você está pensando, Nome?" />
    </div>
  );
}
