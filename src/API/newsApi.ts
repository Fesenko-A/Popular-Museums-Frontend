import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => ({
        url: "news/getall",
      }),
      providesTags: ["News"],
    }),
    getNews: builder.query({
      query: (count) => ({
        url: `news/get/${count}`,
      }),
      providesTags: ["News"],
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsQuery } = newsApi;
export default newsApi;
