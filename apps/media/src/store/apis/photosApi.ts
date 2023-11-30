import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';
import { faker } from '@faker-js/faker';
import { Photo } from '../../types';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((photo: Photo) => ({
          type: 'Photo',
          id: photo.id,
        }));
        tags.push({ type: 'AlbumPhoto', id: album.id });
        return tags;
      },
      query: (album) => ({
        url: '/photos',
        params: {
          albumId: album.id,
        },
        method: 'GET',
      }),
    }),
    addPhoto: builder.mutation({
      invalidatesTags: (result, error, album) => [
        { type: 'AlbumPhoto', id: album.id },
      ],
      query: (album) => ({
        url: '/photos',
        method: 'POST',
        body: {
          albumId: album.id,
          url: faker.image.url({ height: 150, width: 150 }),
        },
      }),
    }),
    removePhoto: builder.mutation({
      invalidatesTags: (result, error, photo) => [
        { type: 'Photo', id: photo.id },
      ],
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
