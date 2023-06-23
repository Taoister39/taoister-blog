import { PaginationReq, SortReq } from "@/types/base";
import { IS_DELETED_ENUM } from "@/types/enum";
import { Post } from "@/types/post";

export interface PostCategory {
  id: string;
  name: string;
  description?: string | null;
  isDeleted: IS_DELETED_ENUM;
  createdAt?: string;
  updatedAt?: string;
}

export type FindManyPostCategoryReq = Partial<PostCategory> &
  PaginationReq &
  SortReq;

export type PostCategoryWithPost = { posts: Post[] } & PostCategory;

export type PostCategoryWithPostCount = { posts: number } & PostCategory;
