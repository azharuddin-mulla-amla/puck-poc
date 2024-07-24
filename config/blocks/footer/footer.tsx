import { ComponentConfig } from "@measured/puck";
import React from "react";

export function Footer(props: any) {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
}

export const FooterConfig: ComponentConfig<{}> = {
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
  label: "Footer",
  render: (props) => <Footer {...props} />,
};
