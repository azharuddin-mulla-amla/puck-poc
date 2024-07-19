import React, { createContext, useContext } from "react";

const SliderContext = createContext<any>({
  slider: [],
});

function SliderProvider({ children, value }) {
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
}

function useSlider() {
  const context = useContext(SliderContext);
  return context?.slider?.slice(0, 10);
}

export { SliderProvider, useSlider };
