"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
// import config from "../../puck.config";
import config from "../../config/puck.config";
import { ProductProvider } from "../../context/ProductProvider";

type TClient = { data: Data };
export function Client({ data }: Readonly<TClient>) {
  return (
    <ProductProvider>
      <Render config={config} data={data} />
    </ProductProvider>
  );
}
