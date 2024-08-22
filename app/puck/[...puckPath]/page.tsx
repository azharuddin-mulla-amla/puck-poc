/**
 * This file implements a *magic* catch-all route that renders the Puck editor.
 *
 * This route exposes /puck/[...puckPath], but is disabled by middleware.ts. The middleware
 * then rewrites all URL requests ending in `/edit` to this route, allowing you to visit any
 * page in your application and add /edit to the end to spin up a Puck editor.
 *
 * This approach enables public pages to be statically rendered whilst the /puck route can
 * remain dynamic.
 *
 * NB this route is public, and you will need to add authentication
 */

import "@measured/puck/puck.css";
import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "../../../lib/get-page";
import {
  apiIntercept,
  apiUrls,
  dataStore,
  getData,
} from "../../../services-v1";

type TPage = Readonly<{
  params: { puckPath: string[] };
}>;

export async function generateMetadata({
  params: { puckPath = [] },
}: TPage): Promise<Metadata> {
  const path = `/${puckPath.join("/")}`;

  return {
    title: "Puck: " + path,
  };
}

async function getServerData() {
  let results: any = {};
  for (const item of apiUrls) {
    // Call API only if key not exist, avoid repeat Same API call
    if (!results[item.dataKey]) {
      const response = await apiIntercept(item.url, item.body);
      if (response) {
        results[item.dataKey] = response;
      }
    }
  }
  return results;
}

export default async function Page({ params: { puckPath = [] } }: TPage) {
  const path = `/${puckPath.join("/")}`;
  const data = getPage(path);

  // const results = await getServerData();
  for (const item of apiUrls) {
    // await fetch()
    await fetch("http://localhost:3000/api/wrapper", {
      method: "POST",
      body: JSON.stringify(item),
    });
    // Call API only if key not exist, avoid repeat Same API call
    // if (!dataStor[item.key]) {
    //   const response = await apiIntercept(item.url, item.body);
    //   if (response) {
    //     results[item.key] = response;
    //   }
    // }
    // const result = await getData(item);
    // console.log(result);
  }

  console.log("puckPath-----", puckPath);
  return <Client path={path} data={data} serverData={{}} />;
}
