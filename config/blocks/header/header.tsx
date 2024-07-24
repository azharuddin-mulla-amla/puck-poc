import { ComponentConfig } from "@measured/puck";
import React from "react";

export function Header(props: any) {
  return (
    <div>
      <h2>Header</h2>
    </div>
  );
}

export const HeaderConfig: ComponentConfig<{}> = {
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
  label: "Header",
  render: (props) => <Header {...props} />,
};
