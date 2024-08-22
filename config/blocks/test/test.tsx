/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css";
import getClassNameFactory from "../../../lib/get-class-name-factory";

import { quotes } from "./quotes";
import { imageList } from "./images";
import { title } from "process";

const getClassName = getClassNameFactory("Hero", styles);

export type HeroProps = {
  // quote?: { index: number; label: string };
  images?: { id: number; url: string; name: string };
  title: string;
  description: string;
  alignImage?: string;
  renderHTML?: string;
  // padding: string;
  // image?: {
  //   mode?: "inline" | "background";
  //   url?: string;
  // };
  // buttons: {
  //   label: string;
  //   href: string;
  //   variant?: "primary" | "secondary";
  //   more?: { text: string }[];
  // }[];
};

export const TestConfig: ComponentConfig<HeroProps> = {
  fields: {
    // quote: {
    //   type: "external",
    //   placeholder: "Select a quote",
    //   showSearch: true,
    //   filterFields: {
    //     author: {
    //       type: "select",
    //       options: [
    //         { value: "", label: "Select an author" },
    //         { value: "Mark Twain", label: "Mark Twain" },
    //         { value: "Henry Ford", label: "Henry Ford" },
    //         { value: "Kurt Vonnegut", label: "Kurt Vonnegut" },
    //         { value: "Andrew Carnegie", label: "Andrew Carnegie" },
    //         { value: "C. S. Lewis", label: "C. S. Lewis" },
    //         { value: "Confucius", label: "Confucius" },
    //         { value: "Eleanor Roosevelt", label: "Eleanor Roosevelt" },
    //         { value: "Samuel Ullman", label: "Samuel Ullman" },
    //       ],
    //     },
    //   },
    //   fetchList: async ({ query, filters }) => {
    //     // Simulate delay
    //     await new Promise((res) => setTimeout(res, 500));

    //     return quotes
    //       .map((quote, idx) => ({
    //         index: idx,
    //         title: quote.author,
    //         description: quote.content,
    //       }))
    //       .filter((item) => {
    //         if (filters?.author && item.title !== filters?.author) {
    //           return false;
    //         }

    //         if (!query) return true;

    //         const queryLowercase = query.toLowerCase();

    //         if (item.title.toLowerCase().indexOf(queryLowercase) > -1) {
    //           return true;
    //         }

    //         if (item.description.toLowerCase().indexOf(queryLowercase) > -1) {
    //           return true;
    //         }
    //       });
    //   },
    //   mapRow: (item) => ({ title: item.title, description: item.description }),
    //   mapProp: (result) => {
    //     return { index: result.index, label: result.description };
    //   },
    //   getItemSummary: (item) => item.label,
    // },

    // images: {
    //   type: "external",
    //   placeholder: "Select a Image",
    //   showSearch: true,

    //   fetchList: async ({ query, filters }) => {
    //     // Simulate delay
    //     await new Promise((res) => setTimeout(res, 500));

    //     return imageList.map((image, idx) => ({
    //       index: idx,
    //       name: image.name,
    //       url: image.url,
    //     }));
    //   },
    //   mapRow: (item) => ({
    //     Name: item.name,
    //     // Image: () => (
    //     //   <img src={item.url} alt={item.name} width={50} height={50} />
    //     // ),
    //     // Image: <img src={item.url} alt={item.name} width={50} height={50} />,
    //   }),
    //   // mapProp: (result) => {
    //   //   return { index: result.index, label: result.description };
    //   // },
    //   // getItemSummary: (item) => item.name,
    //   // render: () => {
    //   //   return <div>render</div>;
    //   // },
    // },

    images: {
      type: "custom",
      render: ({ name, value, onChange }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [show, setShow] = useState(false);
        const renderPopup = () => {
          return (
            <div
              style={{
                position: "fixed",

                backgroundColor: "rgba(0,0,0, 0.8)",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 600,
                  minHeight: 500,
                  backgroundColor: "#ffff",
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    margin: 10,
                  }}
                >
                  Select a Image
                </h1>
                <ul
                  style={{
                    display: "grid",
                    // flexDirection: "column",
                    // flexWrap: "wrap",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 10,
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  {imageList.map((image) => (
                    <li
                      style={{
                        border: "0.2px solid #dcdcdc",
                        borderRadius: 10,
                        cursor: "pointer",
                      }}
                    >
                      <p
                        onClick={() => {
                          onChange(image);
                          setShow(false);
                        }}
                        style={{
                          // display: "flex",
                          // gap: 10,
                          // alignItems: "center",
                          padding: 8,
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${image?.url})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            borderRadius: 24,
                            height: 100,
                            width: 100,
                          }}
                        />
                        <span>{image.name}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <button
                  style={{
                    margin: 10,
                    marginTop: "auto",
                    marginLeft: "auto",
                    display: "block",
                    borderRadius: 8,
                    padding: "8px 10px",
                    backgroundColor: "red",
                    color: "white",
                    position: "absolute",

                    right: 10,
                    bottom: 10,
                  }}
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </div>
            </div>
          );
        };
        return (
          <>
            <button
              onClick={() => setShow((s) => !s)}
              style={{
                backgroundColor: "#f3f6fb",
                width: "100%",
                padding: 10,
                borderRadius: 10,
                color: "#0158ad",
                border: "1px solid #dcdcdc",
              }}
            >
              Show Images
            </button>
            {show && renderPopup()}
          </>
        );
      },
    },
    renderHTML: {
      type: "textarea",
      label: "Custom HTML",
    },
    title: { type: "text" },
    description: { type: "textarea" },

    alignImage: {
      type: "radio",
      label: "Align Image",
      options: [
        { label: "left", value: "left" },
        { label: "right", value: "right" },
      ],
    },
  },

  defaultProps: {
    alignImage: "right",
    description:
      "Elevate your casual look with our maroon hoodie, crafted from soft, breathable fabric. It features a classic fit, adjustable hood, and a roomy front pocket, making it perfect for layering or wearing on its own.",
    images: {
      id: 1,
      name: "Blue Hoodie",
      url: "https://media.istockphoto.com/id/840381654/photo/blank-hoodie-sweatshirt-color-blue-front-view.jpg?s=2048x2048&w=is&k=20&c=S-Cx3kfAAQsRH1wyIxBZNYycAwnS5gpTCOWmVG8St_s=",
    },
    title: "Blue Hoodie",
    renderHTML:
      '<p> <h2 style="font-size: 20px; color:blue">Welcome to Custom HTML</h2> </p>',
  },
  label: "Product",

  render: ({ title, description, puck, alignImage, images, renderHTML }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 50,
          // flexDirection: "row-reverse",
          flexDirection: alignImage === "left" ? "row-reverse" : "row",
          gap: 50,
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            {title || "NA"}
          </h1>
          <p>{description}</p>
          <div dangerouslySetInnerHTML={{ __html: renderHTML || "" }}></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${images?.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 24,
            height: 356,
            marginLeft: "auto",
            width: "50%",
            borderWidth: 1,
          }}
        />
      </div>
    );
  },
};
