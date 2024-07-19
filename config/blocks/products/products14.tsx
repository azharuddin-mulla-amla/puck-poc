import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProvider } from "../../../context/RootProvider";

function ProductItem(props: Readonly<any>) {
  return <li>Product {props.product.title}</li>;
}

function Products() {
  const context = useProvider();
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
      }}
    >
      <h2>Product 14</h2>
      <ul>
        {context?.products?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export const Product14Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Products />,
};
