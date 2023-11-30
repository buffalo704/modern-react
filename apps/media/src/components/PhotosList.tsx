import React from 'react';
import {
  useAddPhotoMutation,
  useFetchPhotosQuery,
} from '../store/apis/photosApi';
import {Album, Photo} from '../types';
import { Skeleton } from './Skeleton';
import { PhotosListItem } from './PhotosListItem';
import { Button } from './Button';

export interface PhotosListProps {
  album: Album;
}

export const PhotosList = ({ album }: PhotosListProps) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className={'h-10 w-full'} times={3} />;
  } else if (error) {
    content = <div>Error loading photos.</div>;
  } else {
    content = data.map((photo: Photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
    </div>
  );
};
