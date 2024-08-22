import { ComponentConfig } from "@measured/puck";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { LeftArrow, RightArrow } from "../../components/icons/icon";

export function BannerSlides(props: any) {
  const {
    children,
    selectedItem = 0,
    showThumbs = false,
    swipeable = true,
    infiniteLoop = true,
    showStatus = false,
    widgetData,
  } = props;
  const { Navigation, AutoPlay, AutoplayTimeOut, AutoplayHoverPause } =
    widgetData;
  const getNavigationType = (navigationType: string) =>
    Navigation?.includes(navigationType);

  return (
    <>
      <Carousel
        showArrows={getNavigationType("Arrows")}
        selectedItem={selectedItem}
        showThumbs={showThumbs}
        showIndicators={getNavigationType("Dots")}
        autoPlay={AutoPlay}
        swipeable={swipeable}
        interval={AutoplayTimeOut}
        infiniteLoop={infiniteLoop}
        showStatus={showStatus}
        stopOnHover={AutoplayHoverPause}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="left-arrow rounded-full absolute max-md:left-2 max-md:top-1/2 max-md:-translate-y-2/4 md:right-32 md:bottom-5 lg:bottom-10 z-10 
              bg-slate-100 hover:bg-gray-600 p-0 lg:p-1"
            >
              <LeftArrow viewBox="0 0 25 24" width="30px" height="30px" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="right-arrow rounded-full absolute max-md:right-2 max-md:top-1/2 max-md:-translate-y-2/4 md:right-20 md:bottom-5 lg:bottom-10 z-10 
              bg-slate-100 hover:bg-gray-600 p-0 lg:p-1"
            >
              <RightArrow viewBox="0 0 25 24" width="30px" height="30px" />
            </button>
          )
        }
      >
        {children}
      </Carousel>
    </>
  );
}
