import { ComponentConfig } from "@measured/puck";
import React from "react";
import Image from "next/image";
import { useProvider } from "../../../context/RootProvider";
import { dataStore } from "../../../services";

function Card(props: any) {
  const img = props?.WebStoreProductModel?.ImageMediumPath ?? "";
  console.log(img);
  return (
    <div
      style={{
        padding: 20,
        // backgroundColor: "#ccc",
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 0.5,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // boxShadow: "0px 1px 5px -1px rgba(0,0,0,0.75)",
      }}
    >
      <img src={img} alt="t-shirt" />
      <h3>Title</h3>
      <p>description....</p>
      <span
        style={{
          fontSize: 20,
        }}
      >
        $12.90
      </span>
    </div>
  );
}

export function Products(props: any) {
  const context = useProvider();
  const products = context.products?.Products ?? [];
  console.log({ dataStore });
  return (
    <section
      style={{
        margin: "50px",
        overflow: "hidden",
      }}
    >
      <h2>Products</h2>
      <div
        style={
          props.display.mode === "grid"
            ? {
                display: "grid",
                gap: 50,
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(200px, max-content))",
                margin: "50px",
              }
            : {
                display: "flex",
                overflowX: "auto",
                gap: 50,
              }
        }
      >
        {products?.map((item: any, idx: number) => {
          console.log(item);
          return (
            <Card
              {...item}
              key={item?.WebStoreProductModel?.ImageMediumPath + idx}
            />
          );
        })}
      </div>
    </section>
  );
}

export const ProductsConfig: ComponentConfig<{}> = {
  fields: {
    display: {
      type: "object",
      objectFields: {
        mode: {
          type: "radio",
          options: [
            { label: "scroll", value: "scroll" },

            { label: "grid", value: "grid" },
          ],
        },
      },
    },
  },

  // resolveData: async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   console.log("resolve", data);
  //   return {
  //     props: {
  //       apiData: data,
  //       url: url,
  //     },
  //   };
  // },
  defaultProps: {
    apiData: [],
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
    display: {
      mode: "scroll",
    },
  },
  label: "Products",
  render: (props) => <Products key={props.id} {...props} />,
};
