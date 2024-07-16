"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";

// import config from "../../../puck.config";
import config from "../../../config/puck.config";
import { ProductProvider } from "../../../context/ProductProvider";

type TClient = { path: string; data: Data };

export function Client(props: Readonly<TClient>) {
  const { path, data } = props;

  return (
    <ProductProvider>
      <Puck
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          await fetch("/puck/api", {
            method: "post",
            body: JSON.stringify({ data, path }),
          });
        }}
      />
    </ProductProvider>
  );
}
