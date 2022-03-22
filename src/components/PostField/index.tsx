import Box from "../Box";
import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
import userNoPhoto from "../../assets/user_no_photo.svg";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

type PostFieldProps = {
  onNewPost: () => void;
};

export default function PostField({ onNewPost }: PostFieldProps) {
  const [text, setText] = useState("");
  const { request, response, error } = useFetch();

  const savePost = () => {
    console.log("savePost");
    if (text.trim().length > 0) {
      request("/api/v1/post", "POST", {
        text,
      });
    }
  };

  useEffect(() => {
    if (error) {
      console.log("Ocorreu um erro: ", error);
    } else if (response) {
      console.log("onNewPost callback");
      onNewPost();
    }
  }, [response, error, onNewPost]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      savePost();
    }
  };

  return (
    <Box className={styles.container}>
      <UserPhoto />
      <input
        placeholder="No que você está pensando, Nome?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Box>
  );
}
