import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProvider } from "../../../context/RootProvider";

// // It should Act like Server Side
// async function Component() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log("component", data);
//   return <div>{JSON.stringify(data)}</div>;
// }

function ProductItem(props: Readonly<any>) {
  return (
    <li>
      <h2>Product {props.product.title}</h2>
      {/* <Component /> */}
    </li>
  );
}

export function Products(props: any) {
  const context = useProvider();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
      }}
    >
      <h2>Product 1</h2>

      <ul>
        {context?.products?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {/* <ul>
        {props?.apiData?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul> */}
    </div>
  );
}

export const Product1Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Products />,
};
