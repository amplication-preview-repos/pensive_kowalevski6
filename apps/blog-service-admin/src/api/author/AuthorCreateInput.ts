import { BlogCreateNestedManyWithoutAuthorsInput } from "./BlogCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogs?: BlogCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};
