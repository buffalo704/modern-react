import React from 'react';
import { ThunkFunction, User } from '../types';
import { GoTrashcan } from 'react-icons/all';
import { useThunk } from '../hooks/useThunk';
import { removeUser } from '../store';
import { Button } from './Button';
import {ExpandablePanel} from "./ExpandablePanel.";
import {AlbumsList} from "./AlbumsList";

interface UsersListItemProps {
  user: User;
}

export const UsersListItem = ({ user }: UsersListItemProps) => {
  const [doDeleteUser, isLoading, error] = useThunk(removeUser);

  const handleUserDelete = () => {
    (doDeleteUser as ThunkFunction)(user);
  };
  const header = <>
    <Button className="mr-2" loading={isLoading as boolean} onClick={handleUserDelete}>
      <GoTrashcan />
    </Button>
    {error && <div>Error deleting user.</div>}
    {user.name}
  </>;

  return (
    <ExpandablePanel header={header}><AlbumsList user={user} /></ExpandablePanel>
  );
};
