import { Blog } from "../blog/Blog";
import { Comment } from "../comment/Comment";

export type Post = {
  blog?: Blog | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
