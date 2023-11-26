import React from 'react';
import {Link} from "./Link";

export const Sidebar = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' }
  ]

  const linkItems = links.map(({ label, path }) => {
    return <Link key={label} to={path} className="mb-3"
    activeClassName="fold-bold border-l-4 border-blue-500 pl-2">{label}</Link>
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {linkItems}
    </div>
  );
};
