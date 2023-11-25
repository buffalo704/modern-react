import React, { useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { Panel } from './Panel';
import { useDropdown } from '../hooks/useDropdown';

export interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const divEl = useRef<HTMLDivElement>(null);
  const { onChange, value } = useDropdown();
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option): void => {
    setIsOpen(false);
    onChange(option);
  };

  const optionItems = options.map((option: Option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className="hover:bg-gray-100 cursor-pointer p-2"
      >
        {option.label}
      </div>
    );
  });

  const content = value?.label || 'Select...';

  const dropdownOptions = isOpen ? (
    <Panel className="absolute top-full">{optionItems}</Panel>
  ) : null;

  return (
      <div ref={divEl} className="w-48 relative">
        <Panel
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          {content}
          <GoChevronDown />
        </Panel>
        {dropdownOptions}
      </div>
  );
};
