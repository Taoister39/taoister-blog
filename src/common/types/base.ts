import { CodeEnum } from "@/common/types/enum";

export interface IListResponse<T> {
  code: CodeEnum;
  message: string;
  data: {
    lists?: T[];
    total: number;
  };
}
export interface IResponse<T> {
  code: CodeEnum;
  message: string;
  data: T;
}

export interface PaginationReq {
  limit?: number;
  offset?: number;
}
