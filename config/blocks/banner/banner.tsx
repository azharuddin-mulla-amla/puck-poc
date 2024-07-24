import { ComponentConfig } from "@measured/puck";
import React from "react";

export function Banner(props: any) {
  console.log(props);
  return (
    <div>
      <h2>Banner</h2>
    </div>
  );
}

export const BannerConfig: ComponentConfig<{}> = {
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
    url: "https://jsonplaceholder.typicode.com/posts",
  },
  label: "Banner",
  render: (props) => <Banner {...props} />,
};
