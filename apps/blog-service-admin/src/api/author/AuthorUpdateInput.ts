import { BlogUpdateManyWithoutAuthorsInput } from "./BlogUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogs?: BlogUpdateManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};
