import React, { createContext, useContext } from "react";
import { TProducts } from "../types/productResponse.type";

type TProductContext = {
  products: TProducts;
};

const ProductContext = createContext<TProductContext>({
  products: [],
});

function ProductProvider({ children, value }) {
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  return context?.products?.slice(0, 10);
}

export { ProductProvider, useProducts };
