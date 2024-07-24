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
import { notFound } from "next/navigation";
import {
  fetchContents,
  fetchProducts,
  fetchSlider,
  getAPIList,
} from "../../../services";
import {
  dataProvider,
  fetchChild,
  fetchChild2,
} from "../../../services/dataProvider";

export async function generateMetadata({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const path = `/${puckPath.join("/")}`;

  return {
    title: "Puck: " + path,
  };
}

type TPage = {
  params: { puckPath: string[] };
};

export default async function Page(props: Readonly<TPage>) {
  const {
    params: { puckPath = [] },
  } = props;
  const path = `/${puckPath.join("/")}`;
  const data = getPage(path);

  console.log(data);
  let result: any = {};
  // for (const item of listOfApiCalls) {
  //   result[item.key] = await item.fn();
  // }

  return <Client path={path} data={data} serverData={result} />;
}
