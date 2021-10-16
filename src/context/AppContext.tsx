import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  pagesCount: number;
  setPagesCount: (newPagesCount: number) => void;
};

const appContextDefaultValue = {
  pagesCount: 1,
  setPagesCount: (newPagesCount: number) => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pagesCount, setPagesCount] = useState<number>(appContextDefaultValue.pagesCount);

  return (
    <AppContext.Provider
      value={{
        pagesCount,
        setPagesCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
