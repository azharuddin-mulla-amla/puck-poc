/**
 * This file implements a catch-all route that renders the user-facing pages
 * generated by Puck. For any route visited (with exception of other hardcoded
 * pages in /app), it will check your database (via `getPage`) for a Puck page
 * and render it using <Render>.
 *
 * All routes produced by this page are statically rendered using incremental
 * static site generation. After the first visit, the page will be cached as
 * a static file. Subsequent visits will receive the cache. Publishing a page
 * will invalidate the cache as the page is written in /api/puck/route.ts
 */

import { Client } from "./client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Data } from "@measured/puck";
import { apiIntercept, getAPIList } from "../../services";
import {
  dataProvider,
  fetchChild,
  fetchChild2,
} from "../../services/dataProvider";

export async function generateMetadata({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const path = `/${puckPath.join("/")}`;

  return {
    title: getPage(path)?.root.props.title,
  };
}

export async function getServerData(data: Data) {
  // Remove duplicate Item
  // const contentKeys = data.content
  //   .map((i) => i.type)
  //   .filter((item, idx, arr) => idx === arr.indexOf(item));

  // console.log(contentKeys);

  // const apiCallingList: Array<any> = getAPIList(1);

  // Remove duplicate Item
  // const listOfApiCalls = contentKeys
  //   .map((item: string) => {
  //     const key = item.split("_")[0];
  //     return apiCallingList.find((i) => i.tempKey === key);
  //   })
  //   .filter(Boolean);

  let result: any = {};
  // for (const item of listOfApiCalls) {
  //   result[item.key] = await item.fn();
  // }

  return result;
}

export async function getUpdateData(data: Data) {
  console.log(data);

  // for (const item of data.content) {
  //   console.log("item>>>", item, data);
  //   if (item.props?.url) {
  //     const response = await fetch(item.props.url);
  //     const responseData = await response.json();
  //     item.props.apiData = responseData;
  //   }
  // }

  return data;
}

export default async function Page({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}) {
  const path = `/${puckPath.join("/")}`;
  const data = getPage(path);

  if (!data) {
    return notFound();
  }

  // const resultData: any = await getServerData(data);
  const updateData: Data = await getUpdateData(data);
  console.log(updateData);

  // Load API Data from database Json
  let results: any = {};
  for (const item of data.content) {
    if (item.props?.url && item.props?.key) {
      if (results[item.props.key]) {
        // Don't call API if key exist in results
      } else {
        const response = await apiIntercept(item.props.url, item.props.body);
        if (response) {
          results[item.props.key] = response;
        }
      }
    }
  }

  // const body = {
  //   LocaleId: 1,
  //   PublishCatalogId: 5,
  //   WidgetKey: "555",
  //   WidgetCode: "BannerSlider",
  //   TypeOfMapping: "PortalMapping",
  //   DisplayName: "BANNER WIDGET",
  //   PortalId: 7,
  //   CMSMappingId: 7,
  // };

  return <Client data={updateData} serverData={results} />;
}

// Force Next.js to produce static pages: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Delete this if you need dynamic rendering, such as access to headers or cookies
export const dynamic = "force-dynamic";
