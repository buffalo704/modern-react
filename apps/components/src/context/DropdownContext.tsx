import {createContext, PropsWithChildren, useState} from 'react';
import {Option} from "../components/Dropdown";

interface DropdownContextType {
  value?: Option;
  onChange: (option:Option) => void;
}

export const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownProvider = ({ children }: PropsWithChildren) => {
  const [selection, setSelection] = useState<Option>();

  const handleSelection = (option: Option): void => {
    setSelection(option);
  }

  const contextValue: DropdownContextType = {
    value:selection,
    onChange:handleSelection
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

