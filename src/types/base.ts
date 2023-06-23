import { CodeEnum, SORT_BY_ENUM, SORT_ORDER_ENUM } from "@/types/enum";

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

export interface SortReq {
  sortBy?: SORT_BY_ENUM;
  order?: SORT_ORDER_ENUM;
}
