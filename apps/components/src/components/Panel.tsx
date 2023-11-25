import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface PanelProps {
  className?: string;
  [rest:string]: unknown;
}
export const Panel = ({
  children,
  className,
  ...rest
}: PropsWithChildren<PanelProps>) => {
  const finalClassName = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );
  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
};
