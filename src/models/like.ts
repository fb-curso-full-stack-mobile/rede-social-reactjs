import { User } from "./user";

export type Like = {
  id: number;
  postId: number | null;
  commentId: number | null;
  userId: number;
  createdAt: Date;
  user: User;
};
