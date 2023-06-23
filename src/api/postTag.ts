import { IListResponse, IResponse } from "@/common/types/base";
import {
  FindManyPostTagReq,
  PostTag,
  PostTagWithPost,
  PostTagWithPostCount,
} from "@/common/types/postTag";
import request from "@/request";

const POST_TAG_URL = "v1/post_tags";

export const getPostTagList = (query: FindManyPostTagReq) =>
  request.get<IListResponse<PostTagWithPostCount>>(`${POST_TAG_URL}`, {
    params: query,
  });

export const getPostTag = (id: string) =>
  request.get<IResponse<PostTagWithPost>>(`${POST_TAG_URL}/${id}`);
