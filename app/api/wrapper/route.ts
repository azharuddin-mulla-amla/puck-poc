import { NextResponse } from "next/server";
import { getData } from "../../../services-v1";

export async function POST(request: Request) {
  const payload = await request.json();

  const response = await getData({
    url: payload.url,
    dataKey: payload.dataKey,
    body: payload.body,
    hasQuery: payload?.hasQuery,
  });

  console.log("getDATA----", response);
  return NextResponse.json({ status: "ok", data: response });
}

export async function GET(request: Request) {
  return NextResponse.json({ status: "ok", data: {} });
}
