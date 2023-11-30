import React from 'react';
import { Album } from '../types';
import { ExpandablePanel } from './ExpandablePanel.';
import { GoTrashcan } from 'react-icons/all';
import { Button } from './Button';
import {useRemoveAlbumMutation} from "../store";
import {PhotosList} from "./PhotosList";

export interface AlbumsListItemProps {
  album: Album;
}

export const AlbumsListItem = ({ album }: AlbumsListItemProps) => {
  const [removeAlbum, results ] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  }

  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  );
};
