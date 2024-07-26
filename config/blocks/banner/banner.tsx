import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProvider } from "../../../context/RootProvider";

export function Banner(props: any) {
  const context = useProvider();

  return (
    <section>
      <h2>Banner</h2>
    </section>
  );
}

export const BannerConfig: ComponentConfig<{}> = {
  fields: {},
  // resolveData: async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   return {
  //     props: {
  //       apiData: data,
  //       url: url,
  //     },
  //   };
  // },
  defaultProps: {
    apiData: [],
    url: "https://jsonplaceholder.typicode.com/posts",
    key: "banner", // for store data in context, we use this key as variable name
  },
  label: "Banner",
  render: (props) => <Banner key={props.id} {...props} />,
};
