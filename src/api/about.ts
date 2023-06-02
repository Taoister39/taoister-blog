import { About } from "@/common/types/about";
import request from "@/request";

const API_URL = `/v1/about`;
/**
 * 獲取關於
 * @returns 關於數據
 */
export const getAboutApi = () => request.get<About>(API_URL);
