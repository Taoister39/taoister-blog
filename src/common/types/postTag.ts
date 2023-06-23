import { PaginationReq } from "@/common/types/base";
import {
  IS_DELETED_ENUM,
  SORT_BY_ENUM,
  SORT_ORDER_ENUM,
} from "@/common/types/enum";
import { Post } from "@/common/types/post";

export interface PostTag {
  id: string;
  name: string;
  description: string | null;
  isDeleted: IS_DELETED_ENUM;
  createdAt: string;
  updatedAt: string;
}

export type PostTagWithPostCount = PostTag & { posts: number };

export interface FindManyPostTagReq extends PaginationReq {
  id?: string;
  name?: string;
  isDeleted?: IS_DELETED_ENUM;
  sortBy?: SORT_BY_ENUM;
  order?: SORT_ORDER_ENUM;
}

export type PostTagWithPost = PostTag & {
  posts: Post[];
};
