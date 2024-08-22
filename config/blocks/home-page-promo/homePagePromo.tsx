import React, { useEffect, useState } from "react";
import { ComponentConfig } from "@measured/puck";
import Image from "next/image";
import Link from "next/link";
import { DataUrls } from "../../../services-v1";

function DynamicText(props: any) {
  const unescapeHtml = (htmlString: string) => {
    return {
      __html: htmlString.replace(/&lt;/g, "<").replace(/&gt;/g, ">") || "",
    };
  };

  return (
    <div
      className="font-medium md:text-white text-2xl uppercase mb-4"
      data-test-selector="divPromoTitle"
      dangerouslySetInnerHTML={unescapeHtml(props?.promoTitle)}
    />
  );
}

function HomePagePromo(props: any) {
  const promoData = {
    containerKey: "HomePagePromo",
    largeImageUrl:
      "https://znodetest.azureedge.net/znode10/6445b569-0ff1-4dba-8453-14287b273f2dtree2.jpg",
    smallImageUrl:
      "https://znodetest.azureedge.net/znode10/e76865ae-f8db-4aaa-becd-f5aa202edf6a281x268.png",
    homePageTitle:
      "Getting the fine edges with &lt;br /&gt;The Cordless Dewalt Router ZX-3000",
    CTALinkUrl: "/mountain-plumbing-10-inch-traditional-round-rain-head",
    CTAText: "View Product",
  };

  if (promoData === null) {
    return <></>;
  }

  const { largeImageUrl, smallImageUrl, homePageTitle, CTALinkUrl, CTAText } =
    promoData;

  return (
    <>
      <div data-test-selector="divHomePagePromoContainer">
        <div className="relative mt-4">
          <picture>
            <source srcSet={largeImageUrl} media="(min-width: 768px)" />
            <source srcSet={smallImageUrl} media="(max-width: 767px)" />
            <Image
              className="w-full h-auto"
              src={largeImageUrl as string}
              alt={"Homepage Promo Imag"}
              width={500}
              height={500}
              data-test-selector={"imgHomePagePromo"}
              loading={"lazy"}
              placeholder={"blur"}
              blurDataURL={DataUrls?.smallPlaceholder}
            />
          </picture>
          <div
            className="md:absolute top-1/4 lg:top-2/4 left-32 text-center md:text-left mt-5 md:mt-0"
            data-test-selector="divPromoText"
          >
            <DynamicText promoTitle={homePageTitle} />
            {CTAText && (
              <div className="pb-4">
                <Link
                  href={CTALinkUrl ? CTALinkUrl : "#"}
                  data-test-selector="linkPromoCTA"
                  className="w-auto uppercase font-semibold tracking-wider text-sm 
         md:text-white xs:focus:ring-0 xs:rounded-none xs:border-2
         xs:border-black md:border-white xs:hover:bg-transparent px-3 py-2"
                >
                  {CTAText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const HomePagePromoConfig: ComponentConfig<any> = {
  fields: {},
  label: "Home Page Promo",
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
    return <HomePagePromo key={id} {...restProps} />;
  },
};
