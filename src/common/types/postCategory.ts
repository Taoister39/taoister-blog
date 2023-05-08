import { IS_DELETED_ENUM } from "@/common/types/enum";

export interface PostCategory {
  id: string;
  name: string;
  description?: string | null;
  isDeleted: IS_DELETED_ENUM;
  createdAt?: string;
  updatedAt?: string;
}