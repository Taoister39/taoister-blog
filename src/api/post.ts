import { Post, PostRequest } from "@/common/types/post";
import request from "@/request";

const API_URL = `/v1/post`;

/**
 * 查詢首頁文章列表
 * @param postReq 查詢參數
 * @returns 文章數組
 */
const getPostListApi = (postReq: PostRequest) =>
  request.get<Post[]>(API_URL, postReq);
