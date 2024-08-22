import React, { useEffect, useRef, useState } from "react";

import { LeftArrow, RightArrow } from "../icons/icon";

export function CardSlider(props: any) {
  const { children, sliderPromo, categoryGrid, pdpSlider } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [prevBtnVisible, setPrevBtnVisible] = useState<boolean>(false);
  const [nextBtnVisible, setNextBtnVisible] = useState<boolean>(false);
  const [perPageSlide, setPerPageSlide] = useState<number>(0);
  const [activeDot, setActiveDot] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);

  const showHideIcons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const scrollWidthDiff = scrollWidth - clientWidth;
    if (scrollLeft === 0) {
      setPrevBtnVisible(true);
    } else {
      setPrevBtnVisible(false);
    }
    if (scrollLeft === scrollWidthDiff) {
      setNextBtnVisible(true);
    } else {
      setNextBtnVisible(false);
    }
    setNumberOfSlides(carouselRef.current.children.length);
  };

  const handleIconClick = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const firstSlideWidth =
      carouselRef.current.querySelector("div")?.offsetWidth || 0;
    const scrollAmount =
      direction === "left" ? -firstSlideWidth : firstSlideWidth;
    carouselRef.current.scrollLeft += scrollAmount;
  };

  const handleDotClick = async (index: number) => {
    if (!carouselRef.current) return;
    const firstSlideWidth =
      carouselRef.current.querySelector("div")?.offsetWidth || 0;
    const scrollAmount = perPageSlide * index * firstSlideWidth;
    carouselRef.current.scrollLeft = scrollAmount;
    setPerPageSlide(perPageSlide);
  };

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 1860) {
        sliderPromo || pdpSlider
          ? setPerPageSlide(4)
          : categoryGrid
          ? setPerPageSlide(10)
          : setPerPageSlide(6);
      } else if (innerWidth >= 1500) {
        sliderPromo || pdpSlider
          ? setPerPageSlide(4)
          : categoryGrid
          ? setPerPageSlide(9)
          : setPerPageSlide(5);
      } else if (innerWidth >= 1300) {
        sliderPromo
          ? setPerPageSlide(3)
          : categoryGrid
          ? setPerPageSlide(8)
          : setPerPageSlide(4);
        pdpSlider && setPerPageSlide(4);
      } else if (innerWidth >= 1160) {
        sliderPromo || pdpSlider
          ? setPerPageSlide(3)
          : categoryGrid
          ? setPerPageSlide(6)
          : setPerPageSlide(3);
      } else if (innerWidth >= 1024) {
        sliderPromo || pdpSlider
          ? setPerPageSlide(2)
          : categoryGrid
          ? setPerPageSlide(6)
          : setPerPageSlide(3);
      } else if (innerWidth >= 768) {
        sliderPromo || pdpSlider
          ? setPerPageSlide(2)
          : categoryGrid
          ? setPerPageSlide(5)
          : setPerPageSlide(3);
      } else if (innerWidth >= 550) {
        categoryGrid ? setPerPageSlide(3) : setPerPageSlide(2);
      } else {
        categoryGrid ? setPerPageSlide(2) : setPerPageSlide(1);
      }
      showHideIcons();
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
      if (innerWidth > 550) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfSlides]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          showHideIcons();
        }
      });
    });
    const observerConfig = { childList: true };
    carouselRef.current &&
      observer.observe(carouselRef.current, observerConfig);
    return () => {
      observer.disconnect();
    };
  }, []);

  const calculateActiveDot = (perPage: number) => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const firstSlideWidth =
      carouselRef.current.querySelector("div")?.offsetWidth || 0;
    const dotIndex = Math.ceil(
      (scrollLeft - 200) / (firstSlideWidth * perPage)
    );
    setActiveDot(dotIndex);
  };

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", showHideIcons);
      scrollContainer.addEventListener("scrollend", () => {
        calculateActiveDot(perPageSlide);
      });
      return () => {
        scrollContainer.removeEventListener("scrollend", () => {
          calculateActiveDot(perPageSlide);
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPageSlide]);
  return (
    <div
      className="carousel-container flex justify-center items-center mt-2 mx-2"
      data-test-selector="divCardSliderContainer"
    >
      <div
        className={`wrapper flex relative h-full justify-start w-full flex-col items-start ${
          categoryGrid ? "max-h-[13.75rem]" : ""
        }`}
      >
        <div
          ref={carouselRef}
          className={`carousels ${
            sliderPromo
              ? "carousel-promo"
              : categoryGrid
              ? "carousel-category"
              : "carousels"
          }  overflow-hidden scroll-smooth py-2 h-full w-full ${
            pdpSlider ? "gap-8" : "gap-4"
          } snaps-inline ${
            numberOfSlides <= perPageSlide ? "justify-center" : "justify-start"
          }  ${window.innerWidth < 550 && pdpSlider ? "pdp-slider" : ""}`}
          style={
            props.hasGrid
              ? {
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gridAutoFlow: "row",
                }
              : {}
          }
        >
          {children}
        </div>
        {Math.ceil(numberOfSlides / perPageSlide) > 1 && (
          <>
            <button
              disabled={prevBtnVisible}
              className={` ${
                numberOfSlides > perPageSlide && showNavigation
                  ? "block"
                  : "hidden"
              } absolute -left-0 ${
                categoryGrid ? "top-1/3" : "top-[43%]"
              } -translate-y-1/2 z-30 left-btn text-white translate-x-[11px] rounded-full hover:transform hover:translate-x-[15px] hover:-translate-y-1/2 hover:duration-300 bg-black p-2 cursor-pointer ${
                prevBtnVisible && "opacity-40"
              }`}
              data-test-selector="btnCardSliderNext"
              ref={leftRef}
              onClick={() => handleIconClick("left")}
              aria-label="next button"
            >
              <LeftArrow color="#fff" />
            </button>
            <div
              className={`items-center justify-center w-full mt-2 mb-3 ${
                numberOfSlides > perPageSlide && showNavigation
                  ? "flex"
                  : "hidden"
              } `}
            >
              {Array.from({
                length: Math.ceil(numberOfSlides / perPageSlide),
              }).map((_, index: number) => (
                <span
                  key={index}
                  className={`rounded-full block cursor-pointer w-1 h-1 mx-3 xs:mx-1 sm:mx-1 md:mx-3 sm:w-2 sm:h-2 md:h-2 md:w-2 ${
                    index === activeDot ? "bg-black" : "bg-slate-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <button
              disabled={nextBtnVisible}
              className={`absolute -right-0 ${
                categoryGrid ? "top-1/3" : "top-[43%]"
              } -translate-y-1/2 right-btn text-white translate-x-[-11px]  rounded-full hover:transform hover:translate-x-[-15px] hover:-translate-y-1/2 hover:duration-300
             bg-black p-2 cursor-pointer ${
               numberOfSlides > perPageSlide && showNavigation
                 ? "block"
                 : "hidden"
             } ${nextBtnVisible && "opacity-40"}`}
              data-test-selector="btnCardSliderNext"
              ref={rightRef}
              aria-label="prev button"
              onClick={() => handleIconClick("right")}
            >
              <RightArrow color="#fff" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
