import React, {PropsWithChildren} from 'react';
import {useNavigation} from "../hooks/useNavigation";
import classNames from "classnames";

export interface LinkProps {
  to: string;
  className?: string;
  activeClassName?: string;
}

export const Link = ({ to, children, className, activeClassName}:PropsWithChildren<LinkProps>) => {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };



  const classes = classNames('text-blue-500', className,
    currentPath === to && activeClassName);

  return <a href={to} onClick={handleClick} className={classes}>{children}</a> ;
};
