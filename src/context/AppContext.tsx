import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  pagesNumber: number;
  setPagesNumber: (newPagesNumbers: number) => void;
};

const appContextDefaultValue = {
  pagesNumber: 1,
  setPagesNumber: (newPagesNumber: number) => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pagesNumber, setPagesNumber] = useState<number>(appContextDefaultValue.pagesNumber);

  return (
    <AppContext.Provider
      value={{
        pagesNumber,
        setPagesNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
