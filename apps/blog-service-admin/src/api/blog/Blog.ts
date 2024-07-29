import { Author } from "../author/Author";
import { Post } from "../post/Post";

export type Blog = {
  author?: Author | null;
  createdAt: Date;
  description: string | null;
  id: string;
  posts?: Array<Post>;
  title: string | null;
  updatedAt: Date;
};
