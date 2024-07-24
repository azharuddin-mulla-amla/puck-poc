import { ComponentConfig } from "@measured/puck";
import React from "react";

export function Products(props: any) {
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
}

export const ProductsConfig: ComponentConfig<{}> = {
  fields: {},
  resolveData: async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);

    const data = await response.json();
    console.log("resolve", data);
    return {
      props: {
        apiData: data,
        url: url,
      },
    };
  },
  defaultProps: {
    apiData: [],
  },
  label: "Products",
  render: (props) => <Products {...props} />,
};
