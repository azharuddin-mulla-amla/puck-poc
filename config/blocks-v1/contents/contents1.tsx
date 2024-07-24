import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProvider } from "../../../context/RootProvider";

export function Contents() {
  const context = useProvider();
  return (
    <section
      style={{
        border: "1px solid #3aba1a",
        margin: "10px",
      }}
    >
      <h2>Contents 1</h2>
      {context.contents.map((content: any) => {
        return <p key={content.id}>{content.desc}</p>;
      })}
    </section>
  );
}

export const Contents1Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Contents />,
};
