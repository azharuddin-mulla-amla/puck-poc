import type { Config } from "@measured/puck";
import { ProductConfig } from "./blocks/products/products";

type Props = {
  HeadingBlock: { title: string };
  Products: {};
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "number", label: "azhar" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Products: ProductConfig,
  },
};

export default config;
