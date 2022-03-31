import Box from "../Box";
import ButtonIconText from "../ButtonIconText";
import UserPhoto from "../UserPhoto";
import icComment from "../../assets/ic_comment.svg";
import IconLike from "../../assets/ic_like.svg?component";
import styles from "./styles.module.css";
import { Post } from "../../models/post";
import { getDateFormatted } from "../../utils/date-utils";
import { fullname } from "../../models/user";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
import CommentItem from "../CommentItem";
type PostProps = {
  post: Post;
  onPostUpdated: (post: Post) => void;
};

export default function PostItem({ post, onPostUpdated }: PostProps) {
  const { request, response, error, clear } = useFetch();
  const { handleSubmit, register, setValue, setFocus } = useForm();

  useEffect(() => {
    console.log("saveComment completed ", error, response);
    if (error) {
      clear();
      console.log(error);
    } else if (response) {
      clear();
      onPostUpdated(post);
    }
  }, [response, error, onPostUpdated, post, clear]);

  const saveComment = (data: any) => {
    data.postId = post.id;
    console.log("saveComment");
    request("/api/v1/comment", "POST", data);
    setValue("text", "");
  };

  const onClickButtonLike = () => {};

  const onClickButtonComment = () => {
    setFocus("text");
  };

  return (
    <Box className={styles.container}>
      {/* Dados do usuário */}
      <div className={styles.userData}>
        <UserPhoto />
        <div>
          <div>{fullname(post.user) || "-"}</div>
          {/* <span>Ontem às 14:00</span> */}
          <span>{getDateFormatted(post.createdAt)}</span>
        </div>
      </div>
      {/* Text do post */}
      <div className={styles.postText}>{post.text}</div>
      <hr />
      {/* Botões de curtir e comentar */}
      <div className={styles.buttonLikeComment}>
        <ButtonIconText
          label="Curtir"
          onClick={onClickButtonLike}
          active
          badgeCount={2}
        >
          <IconLike />
        </ButtonIconText>
        <ButtonIconText
          icon={icComment}
          label="Comentar"
          onClick={onClickButtonComment}
        />
      </div>
      <hr />
      {/* <Comment /> */}
      {post.comments?.map((comment) => (
        <CommentItem
          key={`comment_${comment.id}`}
          user={post.user}
          comment={comment}
        />
      ))}
      <form
        onSubmit={handleSubmit(saveComment)}
        className={styles.commentContainer}
      >
        <UserPhoto />
        <input placeholder="Escreva um comentário..." {...register("text")} />
      </form>
    </Box>
  );
}
