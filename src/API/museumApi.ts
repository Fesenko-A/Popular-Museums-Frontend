import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

const museumApi = createApi({
  reducerPath: "museumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["Museum"],
  endpoints: (builder) => ({
    getAllMuseums: builder.query({
      query: () => ({
        url: "museum/getall",
      }),
      providesTags: ["Museum"],
    }),
    getMuseumById: builder.query({
      query: (id) => ({
        url: `museum/getbyid/${id}`,
      }),
      providesTags: ["Museum"],
    }),
  }),
});

export const { useGetAllMuseumsQuery, useGetMuseumByIdQuery } = museumApi;
export default museumApi;
