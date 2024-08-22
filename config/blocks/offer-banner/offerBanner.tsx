import React, { useEffect, useRef, useState } from "react";

import { CardSlider } from "../../components/carousel/CardSlider";
import { ComponentConfig } from "@measured/puck";
import Image from "next/image";
import Link from "next/link";
import { MediaServerUrl } from "../../../services-v1";

function OfferBanner(props: any) {
  const offerBannerData = [
    {
      ButtonLink: "",
      Description:
        '<div class="text-xl font-semibold">Register Now</div>\r\n' +
        "<p>It only takes minutes and you'll be ready to order.</p>\r\n" +
        '<p><span class=" btn btn-secondary inline-flex items-center justify-center border focus:outline-none rounded-btnBorderRadius  xs:border-black  transition duration-300 ease-in-out transform-gpu uppercase xl:1/4 px-2 py-1 mt-1 ">Get Started</span></p>',
      MediaPath: "8e65d063-de6d-4f37-9526-ed6bb1fb01baRegister-now.svg",
      Title: "Create Account",
    },
    {
      ButtonLink: "",
      Description:
        `<div class="text-xl font-semibold">What's Hot</div>\r\n` +
        "<p>Budget-saving deals on everyday products.</p>\r\n" +
        '<p><span class=" btn btn-secondary inline-flex items-center justify-center border focus:outline-none rounded-btnBorderRadius  xs:border-black  transition duration-300 ease-in-out transform-gpu uppercase xl:1/4 px-2 py-1 mt-1 ">Shop Now</span></p>',
      MediaPath: "4e426b04-2bdf-4ad9-bc1f-12dc2b6e243bWhats-hot.svg",
      Title: "What's Hot",
    },
    {
      ButtonLink: "",
      Description:
        '<div class="text-xl font-semibold">Join Our List</div>\r\n' +
        "<p>Get the latest product sales and updates in your inbox</p>\r\n" +
        '<p><span class=" btn btn-secondary inline-flex items-center justify-center border focus:outline-none rounded-btnBorderRadius  xs:border-black  transition duration-300 ease-in-out transform-gpu uppercase xl:1/4 px-2 py-1 mt-1">Sign Me Up</span></p>',
      MediaPath: "0f62552b-a57e-4b34-84a6-8fa62d9ec895Contact-list.svg",
      Title: "Connect With Us",
    },
  ];

  return (
    <>
      {offerBannerData && (
        <div className="gap-3">
          <CardSlider sliderPromo={true}>
            {offerBannerData?.map((banner: any, index: number) => (
              <div
                key={index}
                className="xs:min-w-full min-h-12 md:min-w-[48.50%] lg:min-w-[32.33%] 2xl:min-w-[24.33%] rounded-cardBorderRadius"
              >
                <Link
                  href={banner.ButtonLink}
                  target="_blank"
                  data-test-selector="linkOfferBanner"
                  rel="noopener noreferrer"
                  className="card flex flex-col-reverse xs:text-center md:text-left md:flex-row gap-x-8 justify-between bg-white drop-shadow-md px-6 py-4 hover:shadow-md items-center h-full w-full"
                >
                  <div className=" w-1/2 md:w-auto pt-4 md:pt-0 ">
                    <div
                      className="text-sm text-textColor1 break-words"
                      dangerouslySetInnerHTML={{ __html: banner?.Description }}
                    ></div>
                  </div>
                  <div className="banner-container w-1/2 h-1/2 md:h-20 md:w-24 ">
                    <Image
                      src={`${MediaServerUrl}${banner.MediaPath}` || ""}
                      alt={`${banner?.Title} Image`}
                      className="w-auto"
                      data-test-selector="imgAdvSpecialOfferBannerImg"
                      width={200}
                      height={0}
                      loading="lazy"
                      style={{ width: "auto" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </CardSlider>
        </div>
      )}
    </>
  );
}

export const OfferBannerConfig: ComponentConfig<any> = {
  fields: {},
  label: "Offer Banner",
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

  render: (props) => {
    const { id, ...restProps } = props;
    return <OfferBanner key={id} {...restProps} />;
  },
};
