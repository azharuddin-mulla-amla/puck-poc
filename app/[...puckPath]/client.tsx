"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "../../config/puck.config";
import { TServerData } from "../puck/[...puckPath]/client";
import { RootProvider } from "../../context/RootProvider";

type TClient = { data: Data; serverData: Readonly<TServerData> };

export function Client({ data, serverData }: Readonly<TClient>) {
  return (
    <RootProvider value={serverData}>
      <Render config={config} data={data} />
    </RootProvider>
  );
}

// let providers: Array<any> = generateProvider(serverData);
// const AllProvider = composeProvider(providers);

// return (
//   <AllProvider>
//     <Render config={config} data={data} />
//   </AllProvider>
// );
