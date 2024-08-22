"use client";
import { useEffect, useState } from "react";
// import { getContentBlockDetails } from "client-services/client-api";
// import { COOKIES } from "@constants/index";
// import getCookie from "@utils/Helpers/CookiesHelper";
import Cookies from "js-cookie";

export const COOKIES = {
  LocaleId: "LocaleId",
  PortalId: "PortalId",
  PublishCatalogId: "PublishCatalogId",
  ProfileId: "ProfileId",
  PublishState: "PublishState",
  WebstoreLocale: "webstoreLocale",
  LoginRequired: "loginRequired",
  CustomToken: "CustomToken",
  ThemeName: "ThemeName",
};

export function objectToQueryString(obj: { [key: string]: any }): string {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

export function generateTagNameArray(
  tagName: string,
  ...ids: string[]
): string[] {
  const tagList: string[] = [];
  const tagCount: number = tagName.split(",").length;
  // check if ids are more than the tags provided
  if (tagCount < (ids?.length || 0)) {
    for (let index = 0; index < (ids || []).length; index++) {
      tagList.push(`${tagName}_${ids[index]}`);
    }
  }
  // check if tags are more than the ids provided
  else if (tagCount > (ids?.length || 0)) {
    for (let index = 0; index < tagCount; index++) {
      tagList.push(
        ids.length > index
          ? `${tagName.split(",")[index]}_${ids[index]}` ?? ""
          : tagName.split(",")[index] ?? ""
      );
    }
  } else {
    for (let index = 0; index < tagCount; index++) {
      tagList.push(`${tagName.split(",")[index]}_${ids?.[index]}`);
    }
  }
  return tagList;
}

export const getContentBlockDetails = async (props: any) => {
  const queryString: string = objectToQueryString(props);
  const { portalId } = props;
  const contentBlockDetails: any = await fetch(
    `/api/content-block?${queryString}`,
    {
      cache: "no-store",
      next: { tags: generateTagNameArray("Portal", portalId) },
    }
  );
  const response = await contentBlockDetails.json();
  return response;
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export function RenderBlock({ blockKey }: { blockKey: string }) {
  const [contentBlockData, setRenderMessage] = useState<string>();

  const sanitizeHTML = (htmlContent: string): string => {
    // Remove script tags and event attributes
    const sanitizedHTML = htmlContent
      ?.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      ?.replace(/on\w+="[^"]*"/gi, "");

    return sanitizedHTML;
  };

  const getRenderBlock = async (inputKey: string) => {
    const portalId: string = getCookie(COOKIES.PortalId) || "";
    const contentBlock = await getContentBlockDetails({
      inputKey: inputKey,
      portalId: portalId,
    });
    const sanitizedHtml = sanitizeHTML(contentBlock);
    setRenderMessage(sanitizedHtml);
  };

  useEffect(() => {
    getRenderBlock(blockKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="text-2xl font-semibold"
      dangerouslySetInnerHTML={{ __html: contentBlockData || "" }}
    />
  );
}
