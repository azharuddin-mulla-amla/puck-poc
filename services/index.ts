export async function fetchProducts() {
  const response = await fetch(
    "https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page"
  );
  console.log("calling product");
  return await response.json();
}

export async function fetchSlider() {
  const response = await fetch(
    "https://dev-8fbaldiexx2p7hc.api.raw-labs.com/slider"
  );
  console.log("calling slider");
  return await response.json();
}

export async function fetchContents() {
  const response = await fetch(
    "https://dev-8fbaldiexx2p7hc.api.raw-labs.com/contents"
  );
  console.log("calling contents");
  return await response.json();
}

export async function fetchAbout() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("calling About");
  return await response.json();
}

// export const apiCallingList = [
//   // { type: "Products", fn: fetchProducts, key: "products" },
//   // { type: "Contents", fn: fetchContents, key: "contents" },
//   // { type: "Slider", fn: fetchSlider, key: "slider" },
//   ...productsAPI,
//   ...contentsAPI,
//   ...sliderAPI,
// ];

// export function getAPIList(length = 0) {
//   const productsAPI = Array.from({ length }, (_, idx) => {
//     return {
//       type: `Products${idx + 1}`,
//       fn: fetchProducts,
//       key: `products`,
//       tempKey: "Products",
//     };
//   });

//   const contentsAPI = Array.from({ length }, (_, idx) => {
//     return {
//       type: `Contents${idx + 1}`,
//       fn: fetchContents,
//       key: `contents`,
//       tempKey: "Contents",
//     };
//   });

//   const sliderAPI = Array.from({ length }, (_, idx) => {
//     return {
//       type: `Slider${idx + 1}`,
//       fn: fetchSlider,
//       key: `slider`,
//       tempKey: "Slider",
//     };
//   });

//   return [
//     // { type: "Products", fn: fetchProducts, key: "products" },
//     // { type: "Contents", fn: fetchContents, key: "contents" },
//     // { type: "Slider", fn: fetchSlider, key: "slider" },
//     ...productsAPI,
//     ...contentsAPI,
//     ...sliderAPI,
//   ];
// }

export const componentsApiUrlAndContextKey = [
  // { url: "https://jsonplaceholder.typicode.com/posts", key: "banner" },
  // { url: "https://jsonplaceholder.typicode.com/posts", key: "categories" },
  // { url: "https://jsonplaceholder.typicode.com/posts", key: "footer" },
  // { url: "https://jsonplaceholder.typicode.com/posts", key: "header" },
  // { url: "https://jsonplaceholder.typicode.com/posts", key: "products" },
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetContainer",
    key: "header", // for store data in context, we use this key as variable name
    body: { CMSMappingId: 7 },
  },
  {
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetProducts/ProductList666PortalMapping7?expand=Promotions,Pricing,Seo,AssociatedProducts,Inventory,ProductReviews,ProductTemplate",
    key: "products", // for store data in context, we use this key as variable name
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
  // {
  //   url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetCategories/CategoryList1992PortalMapping7",
  //   key: "categories", // for store data in context, we use this key as variable name
  //   body: {
  //     LocaleId: 1,
  //     PublishCatalogId: 5,
  //     WidgetKey: "1992",
  //     WidgetCode: "CategoryList",
  //     TypeOfMapping: "PortalMapping",
  //     DisplayName: "CATEGORY LIST WIDGET",
  //     CMSMappingId: 7,
  //     PortalId: 7,
  //   },
  // },
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

const options = {
  method: "PUT",
  body: JSON.stringify({
    LocaleId: 1,
    PublishCatalogId: 5,
    WidgetKey: "555",
    WidgetCode: "BannerSlider",
    TypeOfMapping: "PortalMapping",
    DisplayName: "BANNER WIDGET",
    PortalId: 7,
    CMSMappingId: 7,
  }),
  headers: getApiHeaders(),
};

// ("https://apigateways-qa-znode.amla.io/33724e67-ebb0-4b41-aa35-532a1b3abcc0full-hero-image_husqvarna-lawn-tractor.png");

const bannerSliderUrl =
  "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetSlider/BannerSlider555PortalMapping7";

export async function apiIntercept(url: string, body: any) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: getApiHeaders(),
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseJson = await res.json();

    return responseJson;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
