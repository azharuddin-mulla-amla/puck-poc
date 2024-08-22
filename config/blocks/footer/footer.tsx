import { ComponentConfig } from "@measured/puck";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DataUrls } from "../../../services-v1";

export function FooterTop() {
  return (
    <div className="top-footer">
      <div
        className="mx-6 py-4 px-10 md:px-5"
        data-test-selector="divFooterTop"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <Newsletter /> */}
        </div>
      </div>
    </div>
  );
}

function WidgetLink(props: any) {
  const {
    contentOrientation,
    customClass,
    isFont,
    customImageClass,
    linkWidgetData,
  } = props;
  console.log("WidgetLink--", linkWidgetData);

  const renderWidgetLinks = (linkWidgetConfigurationList: any[]) => {
    const linkWidgets = linkWidgetConfigurationList.map(
      (linkWidgetConfigurationData: any, i) => {
        const { url, isNewTab, mediaPath, title } = linkWidgetConfigurationData;

        if (url) {
          return (
            <li
              key={i}
              className={customClass}
              data-test-selector={`list${title?.replace(/ /g, "")}`}
            >
              <Link target={isNewTab ? "_blank" : "_self"} href={`${url}`}>
                {!mediaPath ? (
                  title
                ) : (
                  <Image
                    src={`${linkWidgetData?.imageThumbnailUrl}${mediaPath}`}
                    alt={title}
                    width={35}
                    height={35}
                    className={customImageClass ?? "pt-3"}
                    loading={"lazy"}
                    placeholder={"blur"}
                    blurDataURL={DataUrls?.smallPlaceholder}
                    data-test-selector={`img${title}`}
                  />
                )}
              </Link>
            </li>
          );
        }
      }
    );
    return linkWidgets;
  };

  const getOrientation = () => {
    return contentOrientation === "horizontal" ? "flex" : "block";
  };

  return (
    <>
      {linkWidgetData && linkWidgetData?.linkDataList && (
        <ul
          className={`link-panel widget gap-6 ${
            isFont ? "font-normal" : "font-medium"
          } ${getOrientation()}`}
        >
          {renderWidgetLinks(linkWidgetData.linkDataList)}
        </ul>
      )}
    </>
  );
}

export function FooterHelpLinkSection(props: any) {
  // const [linkWidgetData, setLinkWidgetData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:3000/api/wrapper", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         url: props.url,
  //         dataKey: props.dataKey,
  //         body: props.body,
  //         hasQuery: true,
  //       }),
  //     });
  //     const responseData = await response.json();
  //     // console.log("responseDATA", convertKeysToCamelCase());
  //     if (responseData.data) {
  //       setLinkWidgetData(responseData.data);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const linkWidgetData = {
    linkDataList: [
      {
        portalId: 7,
        mediaId: 0,
        title: "Amla Commerce",
        url: "/amla",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "test",
        image: null,
        isNewTab: true,
        displayOrder: 1,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "test2",
        url: "/#",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "test2",
        image: null,
        isNewTab: false,
        displayOrder: 2,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Sample Page",
        url: "/#",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "Sample",
        image: null,
        isNewTab: false,
        displayOrder: 3,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Amla",
        url: "/amlacommerce",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "Amla",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "AZ1PageTFriendURL",
        url: "/AZ1PageTFriendURL",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "AZ1PageTFriendURL",
        image: null,
        isNewTab: true,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "nnn",
        url: "/contactusUrl",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "nnn",
        image: null,
        isNewTab: true,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Register for a Business Account",
        url: "/Register-for-Business-Account",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "Register for a Business Account",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Registration Form",
        url: "/provideyourbusinessform",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "Registration Form",
        image: null,
        isNewTab: true,
        displayOrder: 999,
        enableCMSPreview: false,
      },
    ],
    imageThumbnailUrl: "https://znodetest.azureedge.net/znode10/Catalog/150/",
  };

  return (
    <div
      className="footerlinks-wrapper text-white mr-4"
      data-test-selector="divHelpLinkContainer"
    >
      <h2
        className="footer-heading text-lg font-medium uppercase mb-4"
        data-test-selector="hdgHelp"
      >
        Help
      </h2>
      <WidgetLink
        customClass="mb-2"
        isFont={true}
        contentOrientation="vertical"
        linkWidgetData={linkWidgetData}
      />
      {/* {CMSMappingId && (
          <Wrapper
            widgetKey="2243"
            widgetCode="LinkPanel"
            typeOfMapping="PortalMapping"
            displayName="MENU WIDGET"
            cMSMappingId={CMSMappingId}
            contentOrientation="vertical"
            customClass="mb-2"
            isFont={true}
          ></Wrapper>
        )} */}
    </div>
  );
}

export function FooterStoreInfoLinkSection(props: any) {
  // const t = useTranslationMessages("Index");
  // const data = await getPortalDetails();
  // const CMSMappingId = data?.PortalId;
  const linkWidgetData = {
    linkDataList: [
      {
        portalId: 7,
        mediaId: 0,
        title: "Circular Saws test",
        url: "/circular_saws_products",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "Circular Saws",
        image: null,
        isNewTab: false,
        displayOrder: 1,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "test",
        url: "/test",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "test",
        image: null,
        isNewTab: false,
        displayOrder: 1,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "700724",
        url: "/test_issue",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "7724",
        image: null,
        isNewTab: true,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "AZ1PageT",
        url: "/AZ1PageTFriendURL",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "AZ1PageT",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Check Order Status",
        url: "/order-status",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "Check Order Status",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Contact us",
        url: "/contactusUrl",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "Contact us",
        image: null,
        isNewTab: true,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Husqvarna Products",
        url: "/husqvarna_products",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "Husqvarna Products",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "NewPage",
        url: "/#",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "NewPage",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "test111",
        url: "/KK124",
        mediaPath: null,
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "tesr",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
    ],
    imageThumbnailUrl: "https://znodetest.azureedge.net/znode10/Catalog/150/",
  };

  // const [linkWidgetData, setLinkWidgetData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:3000/api/wrapper", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         url: props.url,
  //         dataKey: props.dataKey,
  //         body: props.body,
  //         hasQuery: true,
  //       }),
  //     });
  //     const responseData = await response.json();
  //     // console.log("responseDATA", convertKeysToCamelCase());
  //     if (responseData.data) {
  //       setLinkWidgetData(responseData.data);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div
      className="footerlinks-wrapper text-white mr-4"
      data-test-selector="divStoreInfoContainer"
    >
      <h2
        className="footer-heading text-lg font-medium uppercase mb-4"
        data-test-selector="hdgStoreInfo"
      >
        Store Info
      </h2>
      <WidgetLink
        customClass="mb-2"
        isFont={true}
        contentOrientation="vertical"
        linkWidgetData={linkWidgetData}
      />
      {/* {CMSMappingId && (
        <Wrapper
          widgetKey="2253"
          widgetCode="LinkPanel"
          typeOfMapping="PortalMapping"
          displayName="MENU WIDGET"
          cMSMappingId={CMSMappingId}
          contentOrientation="vertical"
          customClass="mb-2"
          isFont={true}
        ></Wrapper>
      )} */}
    </div>
  );
}

export function CustomerSupport() {
  // const t = useTranslationMessages("Index");
  // const { data, isLoading } = useSWR("/", getPortalData, SWR_DEFAULT_PARAMS);

  // const [customerServiceNumber, setCustomerServiceNumber] = useState<string>();

  // const fetchPortalData = (portalDetails: IPortalDetail) => {
  //   setCustomerServiceNumber(portalDetails?.CustomerServicePhoneNumber);
  // };

  // useEffect(() => {
  //   !isLoading && fetchPortalData(data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);

  return (
    <div>
      <h2
        className="footer-heading text-lg font-semibold uppercase mb-4"
        data-test-selector="hdgCustomerSupport"
      >
        Customer Support
      </h2>
      <div
        className="footer-text mb-3 text-sm"
        data-test-selector="divCustomerSupportLabel"
      >
        If you have any questions
        <br />
        <a
          href="mailto:youremail@example.com"
          className="underline"
          data-test-selector="linkMailTo"
        >
          email
        </a>
        us or give us a call.
      </div>
      <h3
        className="footer-text mb-2 text-sm"
        // aria-label={t("CustomerServiceNumber")}
        data-test-selector="hdgCustomerServicePhoneNumber"
      >
        {/* {customerServiceNumber ? customerServiceNumber : ""} */}
      </h3>
    </div>
  );
}

function toCamelCase(str) {
  return str.replace(/[_-](\w)/g, (_, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = toCamelCase(key);
      acc[camelCaseKey] = convertKeysToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

export function SocialMediaLinks() {
  const linkWidgetData = {
    linkDataList: [
      {
        portalId: 7,
        mediaId: 0,
        title: "Instagram",
        url: "https://www.instagram.com/",
        mediaPath: "9f0efd59-e5c6-40e1-8d64-d2e8c40d6cfeinstagram-24.svg",
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "KK123",
        image: null,
        isNewTab: true,
        displayOrder: 1,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "MSN",
        url: "https://www.msn.com/en-in/",
        mediaPath: "d56a19c3-8f4d-49e1-b9cf-e4be591df50dicon-profile.svg",
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "MSN",
        image: null,
        isNewTab: true,
        displayOrder: 2,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "test",
        url: "/KK124",
        mediaPath: "d6afcef2-2a66-448c-930a-f9f4baed8f59polaroid-6.svg",
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: false,
        localeId: 1,
        titleCode: "test",
        image: null,
        isNewTab: false,
        displayOrder: 3,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "LinkedIn",
        url: "https://znodetest.azureedge.net/znode10/cf65ee0d-c70e-4950-bfc8-c40ab7867dfchomepage-banner-1.jpg",
        mediaPath: "13fca4c5-d2d3-40d0-8645-ad23b280a24eclouds-svgrepo-com.svg",
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "LinkedIn",
        image: null,
        isNewTab: true,
        displayOrder: 20,
        enableCMSPreview: false,
      },
      {
        portalId: 7,
        mediaId: 0,
        title: "Facebook",
        url: null,
        mediaPath: "208aeda7-92d1-40b8-9650-7165a13f201fperfume.png",
        cMSMappingId: 0,
        typeOFMapping: "PortalMapping",
        widgetName: null,
        isActive: true,
        localeId: 1,
        titleCode: "Facebook",
        image: null,
        isNewTab: false,
        displayOrder: 999,
        enableCMSPreview: false,
      },
    ],
    imageThumbnailUrl: "https://znodetest.azureedge.net/znode10/Catalog/150/",
  };

  return (
    <WidgetLink
      contentOrientation="horizontal"
      customClass=" break-words text-left  "
      customWrapperClass=" inline-grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 justify-start justify-items-start items-center  "
      linkWidgetData={linkWidgetData}
    />
  );
}

function Footer(props: any) {
  return (
    <footer className="container-fluid bg-footerBgColor no-print">
      <div>
        <FooterTop />
      </div>
      <div className="mx-6 my-8 pb-5 px-10 md:px-5 text-center md:text-start">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 gap-6">
          <div
            className="col-span-2 text-white flex xs:justify-center xs:items-center md:justify-start md:items-start"
            data-test-selector="divCustomerSupportHelpContainer"
          >
            <FooterHelpLinkSection {...props} />
          </div>
          <div
            className="col-span-2 text-white flex xs:justify-center items-center"
            data-test-selector="divStoreInfoContainer"
          >
            <FooterStoreInfoLinkSection {...props} />
          </div>
          <div
            className="col-span-2 text-white"
            data-test-selector="divCustomerSupportContainer"
          >
            <CustomerSupport {...props} />
          </div>
          <div
            className="col-span-2 lg:col-span-3 flex flex-col  justify-center lg:justify-start mx-auto md:mx-0 lg:pl-4"
            data-test-selector="listSocialMediaContainer"
          >
            <div
              className="footer-heading text-lg lg:text-xl 
            font-medium uppercase mb-4 "
              data-test-selector="divFollowMaxwellsLifestyleContainer"
            >
              Follow Maxwells Lifestyle
            </div>
            {/* @ts-ignore */}
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <div
        className="copyright-section"
        data-test-selector="divCopyRightTextContainer"
      >
        {/* <Copyright /> */}
      </div>
    </footer>
  );
}

export const FooterConfig: ComponentConfig<{}> = {
  fields: {},
  // resolveData: async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   console.log("resolve", data);
  //   return {
  //     props: {
  //       apiData: data,
  //       url: url,
  //     },
  //   };
  // },
  defaultProps: {
    apiData: [],
    url: "https://apigateways-qa-znode.amla.io/v2/WebstoreWidgets/2243/LinkWidgets?cMSMappingId=7&localeId=1&portalId=7&typeOfMapping=PortalMapping",
    dataKey: "footerHelp", // for store data in context, we use this key as variable name
    body: {},
    hasQuery: true,
  },
  label: "Footer",
  render: (props) => <Footer key={props.id} {...props} />,
};
