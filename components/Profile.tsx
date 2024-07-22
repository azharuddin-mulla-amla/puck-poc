import React from "react";
import { useProvider } from "../context/RootProvider";

function Profile(props: any) {
  const context = useProvider();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        backgroundColor: "midnightblue",
        color: "whitesmoke",
      }}
    >
      <h2>Profile</h2>
      <ul>
        {context?.products?.map((product: any) => (
          <li key={product.id}>Product {product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
