import { IListResponse, IResponse } from "@/common/types/base";
import { Post, PostRequest } from "@/common/types/post";
import request from "@/request";

const API_URL = `/v1/posts`;

/**
 * 查詢首頁文章列表
 * @param postReq 查詢參數
 * @returns 文章數組
 */
export const getPostListApi = (postReq: PostRequest) =>
  request.get<IListResponse<Post>>(API_URL, { params: postReq });

export const getPostApi = (id: string) =>
  request.get<IResponse<Post>>(`${API_URL}/${id}`);

export const patchViewIncrementApi = (id: string) =>
  request.patch<IResponse<unknown>>(`${API_URL}/view_increment/${id}`);
