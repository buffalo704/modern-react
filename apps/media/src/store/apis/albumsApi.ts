import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      providesTags: (result, error, user) => {
        const tags = result.map((album) => ({
          type: 'Album',
          id: album.id,
        }));
        tags.push({ type: 'UsersAlbums', id: user.id });
        return tags;
      },
      query: (user) => ({
        url: '/albums',
        params: {
          userId: user.id,
        },
        method: 'GET',
      }),
    }),
    addAlbum: builder.mutation({
      invalidatesTags: (result, error, user) => [
        { type: 'UsersAlbums', id: user.id },
      ],
      query: (user) => ({
        url: '/albums',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.commerce.productName(),
        },
      }),
    }),
    removeAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => [
        { type: 'Album', id: album.id },
      ],
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
