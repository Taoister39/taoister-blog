import request from "@/request";
import { IListResponse, IResponse } from "@/types/base";
import {
  FindManyPostCategoryReq,
  PostCategoryWithPost,
  PostCategoryWithPostCount,
} from "@/types/postCategory";

const API_URL = "v1/post_categories";

export const getPostCategoryList = (query: FindManyPostCategoryReq) =>
  request.get<IListResponse<PostCategoryWithPostCount>>(API_URL, {
    params: query,
  });

export const getPostCategory = (id: string) =>
  request.get<IResponse<PostCategoryWithPost>>(`${API_URL}/${id}`);
