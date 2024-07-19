import React, { createContext, useContext } from "react";

const ContentsContext = createContext<any>({
  contents: [],
});

function ContentsProvider({ children, value }) {
  return (
    <ContentsContext.Provider value={value}>
      {children}
    </ContentsContext.Provider>
  );
}

function useContents() {
  const context = useContext(ContentsContext);
  return context?.contents?.slice(0, 10);
}

export { ContentsProvider, useContents };
