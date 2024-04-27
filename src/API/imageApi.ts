import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["Image"],
  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: () => ({
        url: "image/getall",
      }),
      providesTags: ["Image"],
    }),
    getImageById: builder.query({
      query: (id) => ({
        url: `image/getbyid/${id}`,
      }),
      providesTags: ["Image"],
    }),
    getImageByMuseumId: builder.query({
      query: (id) => ({
        url: `image/getbymuseumid/${id}`,
      }),
      providesTags: ["Image"],
    }),
  }),
});

export const {
  useGetAllImagesQuery,
  useGetImageByIdQuery,
  useGetImageByMuseumIdQuery,
} = imageApi;
export default imageApi;
