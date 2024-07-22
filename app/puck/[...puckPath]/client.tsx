"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";

// import config from "../../../puck.config";
import config, { updateConfig } from "../../../config/puck.config";
import { RootProvider } from "../../../context/RootProvider";

export type TServerData = {
  products?: Array<any>;
  slider?: Array<any>;
  contents?: Array<any>;
};

type TClient = { path: string; data: Data; serverData: Readonly<TServerData> };

export function Client(props: Readonly<TClient>) {
  const { path, data, serverData } = props;

  const updatedConfig = updateConfig(data, config);

  return (
    <RootProvider value={serverData}>
      <Puck
        config={updatedConfig}
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
