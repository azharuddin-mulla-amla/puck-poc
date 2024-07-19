"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";

// import config from "../../../puck.config";
import config from "../../../config/puck.config";
import { ProductProvider } from "../../../context/ProductsProvider";
import { ContentsProvider } from "../../../context/ContentsProvider";
import { SliderProvider } from "../../../context/SliderProvider";
import { RootProvider } from "../../../context/RootProvider";

export type TServerData = {
  products?: Array<any>;
  slider?: Array<any>;
  contents?: Array<any>;
};

type TClient = { path: string; data: Data; serverData: Readonly<TServerData> };

export function Client(props: Readonly<TClient>) {
  const { path, data, serverData } = props;

  return (
    <RootProvider value={serverData}>
      <Puck
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          console.log(data, path);
          await fetch("/puck/api", {
            method: "post",
            body: JSON.stringify({ data, path }),
          });
        }}
      />
    </RootProvider>
  );
}
