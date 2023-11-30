import React from 'react';
import { User } from '../types';
import {useAddAlbumMutation, useFetchAlbumsQuery} from '../store';
import { Skeleton } from './Skeleton';
import {Button} from "./Button";
import {AlbumsListItem} from "./AlbumsListItem";

interface AlbumsListProps {
  user: User;
}
export const AlbumsList = ({ user }: AlbumsListProps) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => <AlbumsListItem key={album.id} album={album}/>);
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      <Button loading={isFetching} onClick={handleAddAlbum}>+ Add Album</Button>
    </div>
      <div>{content}</div>
    </div>
  );
};
