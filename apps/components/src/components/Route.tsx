import React, {PropsWithChildren} from 'react';
import {useNavigation} from "../hooks/useNavigation";

interface RouteProps {
  path: string;
}

export const Route = ({path, children}:PropsWithChildren<RouteProps>) => {
  const { currentPath } = useNavigation();
  return path === currentPath ? <>{children}</> : null;
};
