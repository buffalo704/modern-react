import React from 'react';
import { useRemovePhotoMutation } from '../store/apis/photosApi';
import { GoTrashcan } from 'react-icons/all';
import { Photo } from '../types';
import { GoSync } from 'react-icons/go';

export interface PhotoListItemProp {
  photo: Photo;
}

export const PhotosListItem = ({ photo }: PhotoListItemProp) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleClick = () => {
    removePhoto(photo);
  };

  return (
    <>
      <div className="relative m-2 cursor-pointer" onClick={handleClick}>
        <img className="h-20 w-20" src={photo.url} alt="random pic" />
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
          {results.isLoading ? (
            <GoSync className="animate-spin text-3xl" />
          ) : (
            <GoTrashcan className="text-3xl" />
          )}
        </div>
      </div>
    </>
  );
};
