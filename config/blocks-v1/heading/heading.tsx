import { ComponentConfig } from "@measured/puck";
import React from "react";

function Heading() {
  return <h1>Heading</h1>;
}

export const HeadingConfig: ComponentConfig<{}> = {
  fields: {},
  render: () => <Heading />,
};
