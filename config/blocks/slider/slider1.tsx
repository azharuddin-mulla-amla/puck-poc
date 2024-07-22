import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useSlider } from "../../../context/SliderProvider";
import { useProvider } from "../../../context/RootProvider";

function Slide(props: any) {
  return <li>slide {props.slide.title}</li>;
}

export function Slider(props: any) {
  const context = useProvider();
  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <h2>Slider 1</h2>
      <ul>
        {context?.slider?.map((slide: any) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </ul>
    </div>
  );
}

export const Slider1Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Slider />,
};
