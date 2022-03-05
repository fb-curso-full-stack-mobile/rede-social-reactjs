import Box from "../Box";
import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
import userNoPhoto from "../../assets/user_no_photo.svg";
// type PostFieldProps = {}

export default function PostField() {
  return (
    <Box className={styles.container}>
      <UserPhoto />
      <input placeholder="No que você está pensando, Nome?" />
    </Box>
  );
}
