export const apiUrls = [
  // {
  //   url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetContainer",
  //   key: "header",
  //   body: { CMSMappingId: 7 },
  // },
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetProducts/ProductList666PortalMapping7?expand=Promotions,Pricing,Seo,AssociatedProducts,Inventory,ProductReviews,ProductTemplate",
    key: "products",
    body: {
      LocaleId: 1,
      PublishCatalogId: 5,
      WidgetKey: "666",
      WidgetCode: "ProductList",
      TypeOfMapping: "PortalMapping",
      DisplayName: "FEATURED PRODUCT WIDGET",
      CMSMappingId: 7,
      PortalId: 7,
    },
  },
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetSlider/BannerSlider555PortalMapping7",
    key: "categories",
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
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetSlider/BannerSlider555PortalMapping7",
    key: "sliderBanners",
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
];

export const imageBaseUrl = "https://apigateways-qa-znode.amla.io/";

function getApiHeaders(): HeadersInit {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Znode-PublishState", "PRODUCTION");
  requestHeaders.set("Znode-DomainName", "localhost:3000");
  requestHeaders.set("Accept", "text/plain");
  requestHeaders.set("Cache-Control", "no-store");
  requestHeaders.set("Znode-Locale", "1");
  requestHeaders.set(
    "Znode-PrivateKey",
    "432915F1-17ee-d018-a005-a14-61be3e94a83e"
  );
  requestHeaders.set(
    "Authorization",
    "basic " +
      "YXBpLXFhLXpub2RlLmFtbGEuaW98YTJjMzJkMjYtZmI1Ni00ZTJkLWFhNDQtMTBhZTQwMWEwOTcw"
  );
  requestHeaders.set("Content-Type", "application/json-patch+json");

  return requestHeaders;
}

export async function apiIntercept(url: string, body: any, options?: any) {
  try {
    const newOptions = options ?? {
      method: "PUT",
      body: JSON.stringify(body),
      headers: getApiHeaders(),
      next: {
        revalidate: 0,
      },
    };
    const res = await fetch(url, newOptions);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseJson = await res.json();

    return responseJson;
  } catch (error) {
    console.error("Error fetching data:", error.message, url);
  }
}

type TDataParams = { url: string; body: any; key: string };

export let dataStore: any = {
  name: "helo",
};

export async function getData(params: TDataParams) {
  if (!dataStore[params.key]) {
    console.log(`Retrieving data for ${params.key}..`);
    try {
      const response = await apiIntercept(params.url, params.body);
      if (response) {
        dataStore[params.key] = response;
      }
    } catch (error) {
      console.error("Failed to retrieve data for ${key}:, error");
    }
  }

  return dataStore[params.key];
}
