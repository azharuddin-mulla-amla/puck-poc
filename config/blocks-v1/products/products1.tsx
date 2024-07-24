import { ComponentConfig } from "@measured/puck";
import React, { use, useEffect, useState } from "react";
import { useProvider } from "../../../context/RootProvider";
import { dataProvider, fetchChild } from "../../../services/dataProvider";

// const getData = dataProvider();

function Component(props: any) {
  // const context = useProvider();
  // const [data, setData] = useState([]);
  // const getData = dataProvider();

  // useEffect(() => {
  //   // const data = context.getData("child1", fetchChild);
  //   // setData(data);

  //   async function fetchData() {
  //     // const data = await getData("child1", fetchChild);
  //     const data = await getData("child1", fetchChild);
  //     console.log({ data });
  //     setData(data);
  //   }
  //   fetchData();
  // }, [props.id]);

  // let data = {};
  // data = context.getData("child1", fetchChild);
  // console.log(data);

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {props?.data?.slice(0, 1).map((user) => {
          return <li>{user.title}</li>;
        })}
      </ul>
    </div>
  );
}

function ProductItem(props: Readonly<any>) {
  console.log({ props });
  return (
    <li>
      <h3>Product {props.product.title}</h3>
      <Component id={props.product.id} data={props.apiData} />
    </li>
  );
}

export function Products(props: any) {
  const context = useProvider();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
      }}
    >
      <h2>Product 1</h2>

      <ul>
        {context?.products?.slice(0, 2).map((product: any) => (
          <ProductItem
            key={product.id}
            product={product}
            apiData={props.apiData}
          />
        ))}
      </ul>

      {/* <ul>
        {props?.apiData?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul> */}
    </div>
  );
}

export const Product1Config: ComponentConfig<{}> = {
  fields: {},
  resolveData: async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);

    const data = await response.json();
    console.log("resolve", data);
    return {
      props: {
        apiData: data,
        url: url,
      },
    };
  },
  defaultProps: {
    apiData: [],
  },
  render: (props) => <Products {...props} />,
};
