import { Comment } from "./comment";
import { User } from "./user";

export type Post = {
  id: number;
  text: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  comments?: Comment[];
};
