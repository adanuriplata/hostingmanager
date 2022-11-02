import { createContext, FC, useState } from 'react';
import Loader from './Loader';

export const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerWidth = open ? 180 : 70;

  const handleDrawerToggle = (): void => {
    setOpen(!open);
  };

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
        open,
        handleDrawerToggle,
        drawerWidth,
      }}
    >
      {isLoading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};
