import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  // pageSize: number;
  // setPageSize: (newPagesNumber: number) => void;
};

const appContextDefaultValue = {
  // pageSize: 25,
  // setPageSize: (newPagesNumber: number) => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // const [pageSize, setPageSize] = useState<number>(appContextDefaultValue.pageSize);

  return (
    <AppContext.Provider
      value={
        {
          // pageSize,
          // setPageSize,
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
