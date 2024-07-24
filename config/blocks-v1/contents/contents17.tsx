import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useContents } from "../../../context/ContentsProvider";
import { useProvider } from "../../../context/RootProvider";

function Contents() {
  const context = useProvider();
  return (
    <section
      style={{
        border: "1px solid #3aba1a",
        margin: "10px",
      }}
    >
      <h2>Contents 17</h2>
      {context?.contents.map((content: any) => {
        return <p key={content.id}>{content.desc}</p>;
      })}
    </section>
  );
}

export const Contents17Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Contents />,
};
