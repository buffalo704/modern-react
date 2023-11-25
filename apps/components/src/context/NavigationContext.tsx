import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import {Option} from "../components/Dropdown";

interface NavigationContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
};
