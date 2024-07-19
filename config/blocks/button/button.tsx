import { ComponentConfig } from "@measured/puck";
import React from "react";

function Button() {
  return <button>click me</button>;
}

export const ButtonConfig: ComponentConfig<{}> = {
  fields: {},
  render: () => <Button />,
};
