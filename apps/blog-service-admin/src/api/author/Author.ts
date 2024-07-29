import { Blog } from "../blog/Blog";

export type Author = {
  blogs?: Array<Blog>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
