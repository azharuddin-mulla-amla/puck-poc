import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProducts } from "../../../context/ProductProvider";
import { TProduct, TProducts } from "../../../types/productResponse.type";

type TProductItem = {
  product: TProduct;
};
function ProductItem(props: TProductItem) {
  return <li>Product {props.product.title}</li>;
}

type TProductProps = {
  products: TProducts;
};
function Products(props: TProductProps) {
  return (
    <ul>
      {props.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export const ProductConfig: ComponentConfig<{}> = {
  fields: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const products = useProducts();
    return <Products products={products} />;
  },
};
