import type { ComponentConfig, Config, Data } from "@measured/puck";
import { COMPONENTS } from "../components/components.list";
import { ProductsConfig } from "./blocks/products/products";
import { HeaderConfig } from "./blocks/header/header";
import { FooterConfig } from "./blocks/footer/footer";
import { BannerConfig } from "./blocks/banner/banner";

type Props = {
  HeaderConfig: {};
  BannerConfig: {};
  ProductsConfig: {};
  FooterConfig: {};
};

export const components = {
  HeaderConfig,
  BannerConfig,
  ProductsConfig,
  FooterConfig,
};

export const config: Config<Props> = {
  components: { HeaderConfig, BannerConfig, ProductsConfig, FooterConfig },
};

export function updateConfig(data: Data, config: Config<any>) {
  // for (const content of data.content) {
  //   const hasExist = Object.keys(config.components).includes(
  //     content.type as any
  //   );
  //   if (!hasExist) {
  //     const Component = COMPONENTS.get(content.type as string);
  //     const NewComponent: ComponentConfig<{}> = {
  //       fields: {},
  //       defaultProps: {
  //         url: Component.url,
  //       },
  //       render: () => <Component.Component />,
  //     };
  //     config.components[content.type] = NewComponent;
  //   }
  // }

  return { config };
}
export default config;
