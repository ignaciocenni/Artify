import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artifyApi = createApi({
  reducerPath: "artifyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getProvinces: builder.query({
      query: () => "/provinces",
    }),
    getCategories: builder.query({
      query: () => "/category",
    }),
  }),
});

export const { useGetProductsQuery, useGetUsersQuery, useGetProvincesQuery, useGetCategoriesQuery } = artifyApi;
