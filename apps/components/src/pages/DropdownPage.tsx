import React from 'react';
import {DropdownProvider} from "../context/DropdownContext";
import {Dropdown, Option} from "../components/Dropdown";

export const DropdownPage = () => {
  const options:Option[] = [
    { label: 'The color red', value: 'red' },
    { label: 'The color green', value: 'green' },
    { label: 'A shade of blue', value: 'blue' },
  ];

  return (
    <DropdownProvider>
      <Dropdown options={options} />
    </DropdownProvider>
  );
};
