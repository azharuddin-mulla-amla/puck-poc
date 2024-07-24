import { ComponentConfig } from "@measured/puck";
import React from "react";

export function Footer(props: any) {
  return (
    <footer>
      <p>&copy; all right reserved.</p>
    </footer>
  );
}

export const FooterConfig: ComponentConfig<{}> = {
  fields: {},
  render: () => <Footer />,
};
