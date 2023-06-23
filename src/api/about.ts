import { About } from "@/types/about";
import request from "@/request";
import { IResponse } from "@/types/base";

const API_URL = `/v1/about`;
/**
 * 獲取關於
 * @returns 關於數據
 */
export const getAboutApi = () => request.get<IResponse<About>>(API_URL);
