import React, { createContext, useContext, useEffect, useState } from "react";
import { TProducts } from "../types/productResponse.type";

type TProductContext = {
  products: TProducts;
};

const ProductContext = createContext<TProductContext>({
  products: [],
});

function ProductProvider({ children }) {
  // const [products, setProducts] = useState<TProducts>([]);
  let products = [];

  // async function fetchProducts() {
  //   try {
  //     const response = await fetch(
  //       "https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page"
  //     );
  //     products = await response.json();
  //   } catch (error) {}
  // }

  fetch("https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page")
    .then((response) => response.json())
    .then((data) => {
      products = data;
    });

  // fetchProducts();

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await fetch(
  //         "https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page"
  //       );
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {}
  //   }

  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  return context.products.slice(0, 10);
}

export { ProductProvider, useProducts };
