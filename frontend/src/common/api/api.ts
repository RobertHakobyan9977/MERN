import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ServicesEnum } from "@shared/enums";

import envConfig from "../config";

const baseQuery = fetchBaseQuery({ baseUrl: envConfig.baseUrl + envConfig.prefix });

const api = createApi({
  reducerPath: "api",
  tagTypes: [...Object.values(ServicesEnum)],
  baseQuery,
  endpoints: builder => ({})
});

export default api;
