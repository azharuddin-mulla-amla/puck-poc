import type { ComponentConfig, Config, Data } from "@measured/puck";
import { ProductsConfig } from "./blocks/products/products";
import { HeaderConfig } from "./blocks/header/header";
import { FooterConfig } from "./blocks/footer/footer";
import { CategoriesConfig } from "./blocks/categories/categories";
import { HeroConfig } from "./blocks/hero/hero";
import { ALL_NON_CONFIG } from "../non-config/root";

type Props = {
  HeaderConfig: {};
  ProductsConfig: {};
  FooterConfig: {};
  CategoriesConfig: {};
  HeroConfig: {};
};

export const components = {
  HeaderConfig,
  ProductsConfig,
  FooterConfig,
  CategoriesConfig,
  HeroConfig, // Represent for Banner
};

export const config: Config<Props> = {
  components: {
    ...components,
  },
};

export function updateConfig(data: Data, config: Config<any>) {
  if (!data) return { config };

  for (const content of data.content) {
    const hasExist = Object.keys(config.components).includes(
      content.type as any
    );
    if (!hasExist) {
      const Component = ALL_NON_CONFIG.get(content.type as string);
      const NewComponent: ComponentConfig<{}> = {
        fields: {},
        defaultProps: {
          url: Component.url,
          key: Component.key,
          body: Component.body,
        },
        render: () => <Component.Component />,
      };
      config.components[content.type] = NewComponent;
    }
  }

  return { config };
}
export default config;
