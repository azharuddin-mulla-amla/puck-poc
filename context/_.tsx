import { ContentsProvider } from "./ContentsProvider";
import { ProductProvider } from "./ProductsProvider";
import { SliderProvider } from "./SliderProvider";

const allProviders = [
  {
    key: "slider",
    Component: SliderProvider,
    value: {
      slider: [],
    },
  },
  {
    key: "contents",
    Component: ContentsProvider,
    value: {
      contents: [],
    },
  },
  {
    key: "products",
    Component: ProductProvider,
    value: {
      products: [],
    },
  },
];

export function generateProvider(serverData: any) {
  let providers: Array<any> = [];
  const providerKeys = Object.keys(serverData);
  for (const item of providerKeys) {
    const find = allProviders.find((provider) => provider.key === item);

    providers.push({
      ...find,
      value: {
        ...find.value,
        [item]: serverData[item],
      },
    });
  }
  return providers;
}

export function composeProvider(providers: Array<any>) {
  function Provider({ children }) {
    const initial = <>{children}</>;
    return providers.reduceRight(
      (previous, { Component: CurrentProvider, value = {} }) => {
        return <CurrentProvider value={value}>{previous}</CurrentProvider>;
      },
      initial
    );
  }

  return Provider;
}
