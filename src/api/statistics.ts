import request from "@/request";
import { IResponse } from "@/types/base";
import { StatisticsCount } from "@/types/statistics";

const API_URL = "v1/statistics";

export const getStatisticsCount = () =>
  request.get<IResponse<StatisticsCount>>(`${API_URL}/count`);
