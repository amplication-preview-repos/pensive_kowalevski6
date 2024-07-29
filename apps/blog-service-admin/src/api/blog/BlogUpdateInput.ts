import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostUpdateManyWithoutBlogsInput } from "./PostUpdateManyWithoutBlogsInput";

export type BlogUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  description?: string | null;
  posts?: PostUpdateManyWithoutBlogsInput;
  title?: string | null;
};
