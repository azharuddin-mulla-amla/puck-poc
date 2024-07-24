"use client";

import type { Data } from "@measured/puck";
import { Drawer, Puck } from "@measured/puck";

// import config from "../../../puck.config";
import config, { components, updateConfig } from "../../../config/puck.config";
import { RootProvider } from "../../../context/RootProvider";
import {
  dataProvider,
  fetchChild,
  fetchChild2,
} from "../../../services/dataProvider";

export type TServerData = {
  products?: Array<any>;
  slider?: Array<any>;
  contents?: Array<any>;
};

type TClient = { path: string; data: Data; serverData: Readonly<TServerData> };

export function Client(props: Readonly<TClient>) {
  const { path, data, serverData } = props;

  const { config: updatedConfig } = updateConfig(data, config);

  return (
    <RootProvider value={serverData}>
      <Puck
        config={updatedConfig}
        data={data}
        onPublish={async (data: Data) => {
          const newContent = data.content.map((item) => {
            if (item.props?.apiData) {
              const { apiData, ...restProps } = item.props;
              return {
                ...item,
                props: { ...restProps },
              };
            }
            return item;
          });

          const newData = {
            ...data,
            content: newContent,
          };
          console.log("publish", newData);
          await fetch("/puck/api", {
            method: "post",
            body: JSON.stringify({ data: newData, path }),
          });
        }}
        overrides={{
          // components: () => {
          //   return (
          //     <Drawer direction="vertical">
          //       <div style={{}}>
          //         {Object.keys(config.components).map(
          //           (componentKey, componentIndex) => {
          //             const hasNew =
          //               !Object.keys(components).includes(componentKey);
          //             if (hasNew)
          //               return (
          //                 // <Drawer.Item
          //                 //   key={componentKey}
          //                 //   name={componentKey}
          //                 //   index={componentIndex}
          //                 // >
          //                 //   {() => <></>}
          //                 // </Drawer.Item>
          //                 null
          //               );
          //             return (
          //               <Drawer.Item
          //                 key={componentKey}
          //                 name={componentKey}
          //                 index={componentIndex}
          //               >
          //                 {({ children }) => (
          //                   <div
          //                     style={{
          //                       marginRight: 8,
          //                     }}
          //                   >
          //                     {children}
          //                   </div>
          //                 )}
          //               </Drawer.Item>
          //             );
          //           }
          //         )}
          //       </div>
          //     </Drawer>
          //   );
          // },
          componentItem: ({ name, children }) => {
            const hasExist = Object.keys(components).includes(name);
            if (hasExist)
              return (
                <div
                  style={{
                    margin: "10px 0",
                  }}
                >
                  {children}
                </div>
              );
            return null;
          },
        }}
      />
    </RootProvider>
  );
}
