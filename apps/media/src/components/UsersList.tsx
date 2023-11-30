import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser, RootState } from '../store';
import { Skeleton } from './Skeleton';
import {ThunkFunction, User} from '../types';
import { Button } from './Button';
import { useThunk } from '../hooks/useThunk';
import {UsersListItem} from "./UsersListItem";



export const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    (doFetchUsers as ThunkFunction)();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    (doCreateUser as ThunkFunction)();
  };

  let content;
  if (isLoadingUsers) {
    content= <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user: User) => (<UsersListItem key={user.id} user={user} />));
  }

  const error = creatingUserError ? 'Error creating user...' : null;

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} loading={isCreatingUser as boolean}>+ Add User</Button>
        {error}
      </div>
      {content}
    </div>
  );
};
