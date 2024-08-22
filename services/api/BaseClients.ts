import { headers } from "next/headers";
import { CONSTANT, CustomHeader } from "../../constants";

export function getHeaders(
  requestType: string,
  baseUrl = ""
): Promise<HeadersInit> {
  return getApiHeaders(requestType);
}

//Assigning the header's values.
export async function getApiHeaders(requestType: string): Promise<HeadersInit> {
  const headerList = headers();
  const publishState = headerList.get(CONSTANT.PublishState);
  const domainName = headerList.get(CONSTANT.DomainName);
  const localeId = headerList.get(CONSTANT.LocaleId);

  //   const userDetail: IUser = (await getSavedUserSession()) || {};
  const userDetail: any = {};
  const requestHeaders: HeadersInit = new Headers();
  if (userDetail && userDetail !== undefined) {
    const profileId =
      Number(userDetail?.ProfileId) > 0
        ? userDetail?.ProfileId
        : userDetail?.Profiles?.at(0)?.ProfileId;
    const userId = userDetail?.UserId;

    if (Number(userId) > 0)
      requestHeaders.set(CustomHeader.ZnodeUserId, String(userId) || "");
    if (Number(profileId) > 0)
      requestHeaders.set(CustomHeader.ZnodeProfileId, String(profileId) || "");
    if (Number(localeId) > 0)
      requestHeaders.set(CustomHeader.ZnodeLocaleId, String(localeId) || "");
  }

  if (
    requestType?.toLowerCase() == "post" ||
    requestType?.toLowerCase() == "put"
  )
    requestHeaders.set(
      CustomHeader.Content_Type,
      CustomHeader.application_json || ""
    );

  if (publishState) requestHeaders.set(CustomHeader.PublishState, publishState);
  if (domainName) requestHeaders.set(CustomHeader.DomainName, domainName);

  requestHeaders.set(CustomHeader.Accept, CustomHeader.Text_Plain);
  requestHeaders.set(CustomHeader.Cache_Control, CustomHeader.no_store);
  requestHeaders.set(
    CustomHeader.znodePrivateKey,
    "432915F1-17ee-d018-a005-a14-61be3e94a83e"
  );
  requestHeaders.set(
    CustomHeader.Authorization,
    "basic " + generateDomainBasedToken()
  );
  return requestHeaders;
}

export const generateDomainBasedToken = () => {
  const domain = "api-qa-znode.amla.io";
  const domainKey = "a2c32d26-fb56-4e2d-aa44-10ae401a0970";
  return Buffer.from(domain + "|" + domainKey).toString("base64");
};
