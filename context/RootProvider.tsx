import React, { createContext, useContext } from "react";

const RootProviderContext = createContext<any>({});

function RootProvider({ children, value }) {
  return (
    <RootProviderContext.Provider value={value}>
      {children}
    </RootProviderContext.Provider>
  );
}

function useProvider() {
  const context = useContext(RootProviderContext);
  return context;
}

export { RootProvider, useProvider };
