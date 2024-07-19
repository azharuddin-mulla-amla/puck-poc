import { ComponentConfig } from "@measured/puck";
import React from "react";

function Footer() {
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
