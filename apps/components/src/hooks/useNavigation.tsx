import {useContext} from 'react';
import {NavigationContext} from "../context/NavigationContext";

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useDropdown is undefined');
  }
  return context;
};

