import { ComponentConfig } from "@measured/puck";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useProvider } from "../../../context/RootProvider";

function Card(props: any) {
  return (
    <div
      style={{
        padding: 20,
        // backgroundColor: "#ccc",
        borderRadius: 5,
        borderColor: "#000",
        borderWidth: 0.5,
        // borderStyle: "solid",
        boxShadow: "0px 1px 5px -1px rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3>
          {props?.PublishCategoryModel?.CategoryName ??
            props?.PublishCategoryModel?.CatalogName}
        </h3>
        <p>description....</p>
      </div>
      <div style={{}}>
        <img
          src="https://znodetest.azureedge.net/znode10/8e65d063-de6d-4f37-9526-ed6bb1fb01baRegister-now.svg"
          alt="category icon"
        />
      </div>
    </div>
  );
}
export function Categories(props: any) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/wrapper", {
        method: "POST",
        body: JSON.stringify({
          url: props.url,
          dataKey: props.dataKey,
          body: props.body,
        }),
      });
      const responseData = await response.json();
      setCategories(responseData?.data?.Categories ?? []);
      console.log("response-----categories", responseData.data.Categories);
    }
    fetchData();
  }, []);

  return (
    <section
      style={{
        margin: "50px",
      }}
    >
      <h2>Categories</h2>
      <div
        style={{
          display: "grid",
          gap: 50,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {categories.map((item: any) => {
          return <Card key={item} {...item} />;
        })}
      </div>
    </section>
  );
}

export const CategoriesConfig: ComponentConfig<{}> = {
  fields: {},
  defaultProps: {
    apiData: [],
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetCategories/CategoryList1992PortalMapping7",
    dataKey: "categories", // for store data in context, we use this key as variable name
    body: {
      LocaleId: 1,
      PublishCatalogId: 5,
      WidgetKey: "1992",
      WidgetCode: "CategoryList",
      TypeOfMapping: "PortalMapping",
      DisplayName: "CATEGORY LIST WIDGET",
      CMSMappingId: 7,
      PortalId: 7,
    },
  },
  label: "Categories",
  render: (props) => <Categories key={props.id} {...props} />,
};
