import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryInterface } from "../../interfaces/product";

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/',
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query<any, QueryInterface>({
      query: ({ page, rows, sortBy, orderBy }) => `products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
    }),
  }),
});

export const { useGetProductByNameQuery } = fetchApi;

