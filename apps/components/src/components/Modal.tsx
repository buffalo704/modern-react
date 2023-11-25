import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  actionBar?: React.ReactElement;
}

export const Modal = ({
  onClose,
  actionBar,
  children,
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>

      </div>
    </div>,
    document.querySelector('.modal-container') as HTMLElement
  );
};
