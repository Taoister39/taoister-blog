import {
  IS_DELETED_ENUM,
  IS_PUBLISHED_ENUM,
  POST_TYPE_ENUM,
} from "@/common/types/enum";
import { PostCategory } from "@/common/types/postCategory";
import { PostTag } from "@/common/types/postTag";

export interface Post {
  id: string;
  title: string;
  description?: string;
  content: string;
  view: number;
  type: POST_TYPE_ENUM;
  isDeleted?: IS_DELETED_ENUM;
  isPublished?: IS_PUBLISHED_ENUM;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  categories?: PostTag[];
  tags?: PostCategory[];
}

export interface PostRequest {}
