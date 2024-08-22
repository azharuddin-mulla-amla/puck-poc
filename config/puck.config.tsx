import React from "react";
import type { ComponentConfig, Config, Data } from "@measured/puck";

import { ProductsConfig } from "./blocks/products/products";
import { HeaderConfig } from "./blocks/header/header";
import { FooterConfig } from "./blocks/footer/footer";
import { CategoriesConfig } from "./blocks/categories/categories";
import { HeroConfig } from "./blocks/hero/hero";
import { BannerConfig } from "./blocks/banner/banner";
import { HomePagePromoConfig } from "./blocks/home-page-promo/homePagePromo";
import { OfferBannerConfig } from "./blocks/offer-banner/offerBanner";
import { TestConfig } from "./blocks/test/test";

type Props = {
  HeaderConfig: {};
  ProductsConfig: {};
  FooterConfig: {};
  // CategoriesConfig: {};
  HeroConfig: {};
  BannerConfig: {};
  OfferBannerConfig: {};
  HomePagePromoConfig: {};
  TestConfig: {};
};

export const components = {
  HeaderConfig,
  ProductsConfig,
  FooterConfig,
  // CategoriesConfig,
  HeroConfig, // Represent for Banner
  BannerConfig,
  HomePagePromoConfig,
  OfferBannerConfig,
  TestConfig,
};

export const config: Config<Props> = {
  components: {
    ...components,
  },
  root: {
    render: ({ children, puck }) => {
      // console.log(
      //   "PUCK___",
      //   React.Children.forEach(children, (element: any) => {
      //     // console.log("children----", children.type === HeaderConfig);
      //   })
      // );
      return (
        <>
          <h1>Hello</h1>
          {children}
          <footer></footer>
        </>
      );
    },
  },
};

export function updateConfig(data: Data, config: Config<any>) {
  if (!data) return { config };

  for (const content of data.content) {
    const hasExist = Object.keys(config.components).includes(
      content.type as any
    );
    // if (!hasExist) {
    //   const Component = ALL_NON_CONFIG.get(content.type as string);
    //   const NewComponent: ComponentConfig<{}> = {
    //     fields: {},
    //     defaultProps: {
    //       url: Component.url,
    //       key: Component.key,
    //       body: Component.body,
    //     },
    //     render: () => <Component.Component />,
    //   };
    //   config.components[content.type] = NewComponent;
    // }
  }

  return { config };
}
export default config;
