import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useSlider } from "../../../context/SliderProvider";
import { useProvider } from "../../../context/RootProvider";

function Slide(props: any) {
  return <li>slide {props.slide.title}</li>;
}

function Slider() {
  const context = useProvider();
  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <h2>Slider 6</h2>
      <ul>
        {context?.slider?.map((slide: any) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </ul>
    </div>
  );
}

export const Slider6Config: ComponentConfig<{}> = {
  fields: {},
  render: () => <Slider />,
};