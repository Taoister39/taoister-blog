import { IResponse } from "@/common/types/base";
import { Profile } from "@/common/types/profile";
import request from "@/request";

const API_URL = `/v1/profile`;

export const getProfileApi = () => request.get<IResponse<Profile>>(API_URL);
