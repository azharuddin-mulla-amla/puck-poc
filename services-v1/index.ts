export const apiUrls = [
  // {
  //   url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetContainer",
  //   key: "header",
  //   body: { CMSMappingId: 7 },
  // },
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetProducts/ProductList666PortalMapping7?expand=Promotions,Pricing,Seo,AssociatedProducts,Inventory,ProductReviews,ProductTemplate",
    dataKey: "products",
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
    dataKey: "categories",
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
    dataKey: "sliderBanners",
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
    url: "https://apigateways-qa-znode.amla.io/v2/WebstoreWidgets/2243/LinkWidgets?cMSMappingId=7&localeId=1&portalId=7&typeOfMapping=PortalMapping",
    dataKey: "footerHelp",
    body: {},
    hasQuery: true,
  },
];

export const imageBaseUrl = "https://apigateways-qa-znode.amla.io/";

export const MediaServerUrl = "https://znodetest.azureedge.net/znode10/";

export const DataUrls = {
  smallPlaceholder:
    "data:image/webp;base64,UklGRooDAABXRUJQVlA4IH4DAAAwEwCdASpVABoAPpFAlkklpCGhKrgM+LASCWoAuNw5AIKbu8PQd/48RZ0yb0AP2A9bL1Y/9lk6rAObR7tHkHTB6jbiz+371Rxj+U/3r8ruYD6tehb+eeUHe0Fkf+HyufPH/H/wHwCfq7/yuBdHkvBuhAfJ+lv6DpW/pvNTf5AC3+bAFLjN3H7t4Lp4+7Is0JcyX+P6mWVEHlA/bBgya/s3nQAA/v8PhWFokO/fJpgTrBSwqa1K4D4axuy2Mqx2D6mi7EV3pq16jxcEuOAd3FOswJn3lI4wzzGp6ImybU0b1udGCm/2WAhA5RtXK+ckCGUxJ7Ra+840JAxgtDL7HlpxOSvoYwUW8UUNkV0Tz0wvKOMchbd+RwcvqETAf7sR8s1w04r5zhGwfvL3uVIx5ldoL9mOvaK+5u2ucVH4dhLhWYfxPhB7BFimXBzKPdKFdIQEwze6d+mo/RMnWJ2sr8nnkJpw76TbQSwzf8t5pU6p/+PiQg5nbF8W/R1bDiEl0UI6xeyx6HFP+VkJDzAJSBOV6Emfwx5wHnABl29+DsggjKMJbd34woaicEr4Rt85WgT4245bD/JpUOQtu/I9DDP00bLVpP4aPMr4fQsuoeRZ6BMF17DChmoeCmXrRLyOOlIygI/2Am49n2LZKelP5HxyYfZwLKdFCP/z6M5eoau9mJgMDTwqvonogrHdpFJbLLjaSnqJKIQP/DQRB0AxE/dcgJV253/GdVCLc20qrRWwUAkfm9x3YxjZ4AYYultJQh9pz8kHxczON3N7zk2g+Zh585Yn3oW6R52Dfd9atHq1wI0TjmvCHRldkvXx1G7Q+XeK6Tn85iSX8PpYGJ+9PuarPWU+p8cGiRHci1tiL2NKZnEbR3SDz3KC7hmJniY1IqJrMhvhmtMTr9Wc//w71StsCDyrelLUd7wd64Q1mkbvYbHmMYVKWOLOIsfJX75oqwUF4tBrdrck/TpLdyXgjYM+SFJ2Wno05agfNT+JsM2BmAqkrrk7GbA9eaC0vo7jpSIJeKLneB+1ljyejgeHj/rTO75Jref+L+H8kB/TiVqQRLjBSlfs4Ny8m5hP01Z//kD4SzJFDpquL1aWR451rXTi6GmF9T8QjV40Gbun6CV3Jg3YCOhd6C6WT0MgPCs4arRTa4Yir/2DHWh0EbEoPhkbFvN0O+D9S0fQBeeAAAA=",
};

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

export async function apiIntercept(
  url: string,
  body: any,
  options?: any,
  hasQuery?: boolean
) {
  try {
    // if v2 api - use GET
    let newOptions = {};
    if (hasQuery) {
      newOptions = {
        method: "GET",
        headers: getApiHeaders(),
        next: {
          revalidate: 0,
        },
      };
    } else {
      newOptions = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: getApiHeaders(),
        next: {
          revalidate: 0,
        },
      };
    }
    const res = await fetch(url, newOptions);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseJson = await res.json();
    console.log("responseJSON----", { newOptions, responseJson });

    return responseJson;
  } catch (error) {
    console.error("Error fetching data:", error.message, url);
  }
}

type TDataParams = {
  url: string;
  body: any;
  dataKey: string;
  hasQuery: boolean;
};

export let dataStore: any = {};

export async function getData(params: TDataParams): Promise<any> {
  console.log(JSON.stringify(dataStore, null, 2));
  if (!dataStore[params.dataKey]) {
    console.log(`Retrieving ${params.dataKey} data from API`);
    try {
      const response = await apiIntercept(
        params.url,
        params.body,
        undefined,
        params.hasQuery
      );
      if (response) {
        dataStore[params.dataKey] = response;
      }
    } catch (error) {
      console.error("Failed to retrieve data for ${key}:, error");
    }
  } else {
    console.log(`Retrieving ${params.dataKey} data for object`);
  }

  return Promise.resolve(dataStore[params.dataKey]);
}
