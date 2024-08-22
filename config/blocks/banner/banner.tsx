import { ComponentConfig } from "@measured/puck";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
import { LeftArrow, RightArrow } from "../../components/icons/icon";
import { MediaServerUrl } from "../../../services-v1";
import { BannerSlides } from "../../components/carousel/bannerSliders";

export const blurDataUrl =
  "data:image/webp;base64,UklGRooDAABXRUJQVlA4IH4DAAAwEwCdASpVABoAPpFAlkklpCGhKrgM+LASCWoAuNw5AIKbu8PQd/48RZ0yb0AP2A9bL1Y/9lk6rAObR7tHkHTB6jbiz+371Rxj+U/3r8ruYD6tehb+eeUHe0Fkf+HyufPH/H/wHwCfq7/yuBdHkvBuhAfJ+lv6DpW/pvNTf5AC3+bAFLjN3H7t4Lp4+7Is0JcyX+P6mWVEHlA/bBgya/s3nQAA/v8PhWFokO/fJpgTrBSwqa1K4D4axuy2Mqx2D6mi7EV3pq16jxcEuOAd3FOswJn3lI4wzzGp6ImybU0b1udGCm/2WAhA5RtXK+ckCGUxJ7Ra+840JAxgtDL7HlpxOSvoYwUW8UUNkV0Tz0wvKOMchbd+RwcvqETAf7sR8s1w04r5zhGwfvL3uVIx5ldoL9mOvaK+5u2ucVH4dhLhWYfxPhB7BFimXBzKPdKFdIQEwze6d+mo/RMnWJ2sr8nnkJpw76TbQSwzf8t5pU6p/+PiQg5nbF8W/R1bDiEl0UI6xeyx6HFP+VkJDzAJSBOV6Emfwx5wHnABl29+DsggjKMJbd34woaicEr4Rt85WgT4245bD/JpUOQtu/I9DDP00bLVpP4aPMr4fQsuoeRZ6BMF17DChmoeCmXrRLyOOlIygI/2Am49n2LZKelP5HxyYfZwLKdFCP/z6M5eoau9mJgMDTwqvonogrHdpFJbLLjaSnqJKIQP/DQRB0AxE/dcgJV253/GdVCLc20qrRWwUAkfm9x3YxjZ4AYYultJQh9pz8kHxczON3N7zk2g+Zh585Yn3oW6R52Dfd9atHq1wI0TjmvCHRldkvXx1G7Q+XeK6Tn85iSX8PpYGJ+9PuarPWU+p8cGiRHci1tiL2NKZnEbR3SDz3KC7hmJniY1IqJrMhvhmtMTr9Wc//w71StsCDyrelLUd7wd64Q1mkbvYbHmMYVKWOLOIsfJX75oqwUF4tBrdrck/TpLdyXgjYM+SFJ2Wno05agfNT+JsM2BmAqkrrk7GbA9eaC0vo7jpSIJeKLneB+1ljyejgeHj/rTO75Jref+L+H8kB/TiVqQRLjBSlfs4Ny8m5hP01Z//kD4SzJFDpquL1aWR451rXTi6GmF9T8QjV40Gbun6CV3Jg3YCOhd6C6WT0MgPCs4arRTa4Yir/2DHWh0EbEoPhkbFvN0O+D9S0fQBeeAAAA=";

const getTextPosition = (textAlign: string) => {
  const getPosition = "md:absolute md:top-1/2 md:-translate-y-2/4 max-md:p-5";

  const getAlignment = () => {
    switch (textAlign) {
      case "Left Align":
        return "text-left left-20";
      case "Center Align":
        return "text-center w-full";
      case "Right Align":
        return "text-right right-20";
      default:
        return "text-left left-20";
    }
  };

  return `${getPosition} ${getAlignment()}`;
};

function HTMLRenderer(props: any) {
  const { htmlContent, textAlignment } = props;
  return (
    <div className={`${getTextPosition(textAlignment)}`}>
      <h2
        className="lg:text-4xl md:text-3xl text-sm font-semibold uppercase text-white mb-3"
        aria-label="Headings"
      ></h2>
      <div
        className="lg:text-4xl md:text-3xl text-sm text-white break-words"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
}

export function Banner(props: any) {
  const [sliderData, setSliderData] = useState(null);
  const [img, setImg] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/wrapper", {
        method: "POST",
        body: JSON.stringify({
          url: props.url,
          dataKey: props.dataKey,
          body: props.body,
        }),
      });
      const responseData = await response.json();
      const data = responseData?.data?.Slider ?? null;
      const img = data?.MediaPath
        ? `https://znodetest.azureedge.net/znode10/${data?.MediaPath}`
        : "";
      setSliderData(data);
      setImg(img);
    }
    fetchData();
  }, []);

  if (sliderData && Object.keys(sliderData)?.length === 0) return <></>;
  console.log("sliderData----", sliderData);
  const bannerSettingsData = {
    Navigation: sliderData?.Navigation,
    AutoPlay: sliderData?.AutoPlay,
    AutoplayTimeOut: sliderData?.AutoplayTimeOut,
    AutoplayHoverPause: sliderData?.AutoplayHoverPause,
  };

  const bannerCarouselData =
    sliderData?.SliderBanners?.map((banner: any) => ({
      ButtonLink: banner?.ButtonLink,
      BannerSequence: banner?.BannerSequence,
      MediaPath: banner?.MediaPath,
      ImageAlternateText: banner?.ImageAlternateText,
      Description: banner?.Description,
      TextAlignment: banner?.TextAlignment,
    })) ?? [];

  return (
    <div className="bg-slate-500 md:bg-transparent">
      <BannerSlides {...props} widgetData={bannerSettingsData}>
        {bannerCarouselData &&
          bannerCarouselData?.map((carouselData: any, index: number) => {
            const {
              ButtonLink,
              BannerSequence,
              MediaPath,
              ImageAlternateText,
              Description,
              TextAlignment,
            } = carouselData;
            const imgSrc = `${MediaServerUrl}${MediaPath}`;
            return (
              <Link
                href={ButtonLink}
                target="_blank"
                key={BannerSequence}
                className="block"
                aria-label="Banner Slider"
                data-test-selector="linkBannerSlider"
              >
                <Image
                  src={imgSrc}
                  alt={ImageAlternateText}
                  className="w-full"
                  data-test-selector={`imgMediaPath${index}`}
                  width={200}
                  priority={false}
                  height={50}
                  loading={"lazy"}
                  placeholder={"blur"}
                  blurDataURL={blurDataUrl}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <HTMLRenderer
                  htmlContent={Description}
                  textAlignment={TextAlignment}
                />
              </Link>
            );
          })}
      </BannerSlides>
    </div>
  );
}

export const BannerConfig: ComponentConfig<{}> = {
  fields: {},
  // resolveData: async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   return {
  //     props: {
  //       apiData: data,
  //       url: url,
  //     },
  //   };
  // },
  defaultProps: {
    apiData: [],
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetSlider/BannerSlider555PortalMapping7",
    dataKey: "sliderBanners", // for store data in context, we use this key as variable name
    body: {
      LocaleId: 1,
      PublishCatalogId: 5,
      WidgetKey: "555",
      WidgetCode: "BannerSlider",
      TypeOfMapping: "PortalMapping",
      DisplayName: "BANNER WIDGET",
      PortalId: 7,
      CMSMappingId: 7,
    },
  },
  label: "Banner",
  render: (props) => <Banner key={props.id} {...props} />,
};
