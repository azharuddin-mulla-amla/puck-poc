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

// export const apiCallingList = [
//   // { type: "Products", fn: fetchProducts, key: "products" },
//   // { type: "Contents", fn: fetchContents, key: "contents" },
//   // { type: "Slider", fn: fetchSlider, key: "slider" },
//   ...productsAPI,
//   ...contentsAPI,
//   ...sliderAPI,
// ];

export function getAPIList(length = 0) {
  const productsAPI = Array.from({ length }, (_, idx) => {
    return {
      type: `Products${idx + 1}`,
      fn: fetchProducts,
      key: `products`,
    };
  });

  const contentsAPI = Array.from({ length }, (_, idx) => {
    return {
      type: `Contents${idx + 1}`,
      fn: fetchContents,
      key: `contents`,
    };
  });

  const sliderAPI = Array.from({ length }, (_, idx) => {
    return {
      type: `Slider${idx + 1}`,
      fn: fetchSlider,
      key: `slider`,
    };
  });

  return [
    // { type: "Products", fn: fetchProducts, key: "products" },
    // { type: "Contents", fn: fetchContents, key: "contents" },
    // { type: "Slider", fn: fetchSlider, key: "slider" },
    ...productsAPI,
    ...contentsAPI,
    ...sliderAPI,
  ];
}
