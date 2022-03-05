import styles from "./styles.module.css";
import userNoPhoto from "../../assets/user_no_photo.svg";
type UserPhotoProps = {
  small?: boolean;
};

export default function UserPhoto({ small }: UserPhotoProps) {
  return (
    <img
      className={small ? styles.userPhotoSmall : styles.userPhoto}
      src={userNoPhoto}
    />
  );
}
