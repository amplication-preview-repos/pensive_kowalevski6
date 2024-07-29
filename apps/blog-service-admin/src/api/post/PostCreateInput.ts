import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  blog?: BlogWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  title?: string | null;
};
