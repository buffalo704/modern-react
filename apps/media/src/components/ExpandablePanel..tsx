import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/all';

interface ExpandablePanelProps {
  header: ReactElement;
}

export const ExpandablePanel = ({
  header,
  children,
}: PropsWithChildren<ExpandablePanelProps>) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const expandIcon = expanded ? <GoChevronDown /> : <GoChevronLeft />;
  const content = expanded ? (
    <div className="p-2 border-t">{children}</div>
  ) : null;
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expandIcon}
        </div>
      </div>
      {content}
    </div>
  );
};
