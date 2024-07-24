import { ComponentConfig } from "@measured/puck";
import React from "react";

function Card() {
  return <div>Card</div>;
}

export const CardConfig: ComponentConfig<{}> = {
  fields: {},
  render: () => <Card />,
};
