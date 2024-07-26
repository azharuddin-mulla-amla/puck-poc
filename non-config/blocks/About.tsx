import React from "react";
// import { useProvider } from "../context/RootProvider";

function About(props: any) {
  // const context = useProvider();
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        backgroundColor: "black",
        color: "whitesmoke",
      }}
    >
      <h2>About</h2>
      {/* <ul>
        {context?.about?.slice(1, 10).map((product: any) => (
          <li key={product.id}>About {product.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default About;
