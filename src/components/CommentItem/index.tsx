import { Comment } from "../../models/comment";
import { fullname, User } from "../../models/user";
import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
type CommentProps = {
  user?: User;
  comment: Comment;
};

export default function CommentItem({ user, comment }: CommentProps) {
  return (
    <div className={styles.container}>
      <UserPhoto small />
      <div>
        <div>{fullname(user)}</div>
        <span>{comment.text || ""}</span>
      </div>
    </div>
  );
}
