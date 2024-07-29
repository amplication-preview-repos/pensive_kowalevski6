import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
