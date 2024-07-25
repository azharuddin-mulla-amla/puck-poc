/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import styles from "./styles.module.css";
import getClassNameFactory from "../../../lib/get-class-name-factory";
import { ComponentConfig } from "@measured/puck";
import { quotes } from "./quotes";
import { Section } from "../../components/section/section";
import { useProvider } from "../../../context/RootProvider";
import { Button } from "../../components/button/button";

const getClassName = getClassNameFactory("Hero", styles);

function Hero({
  align,
  title,
  description,
  buttons,
  padding,
  image,
  puck,
}: any) {
  // Empty state allows us to test that components support hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [_] = useState(0);
  const context = useProvider();
  const sliderBanners =
    context?.sliderBanners?.Slider?.SliderBanners[0] ?? null;
  const img = sliderBanners?.MediaPath
    ? `https://znodetest.azureedge.net/znode10/${sliderBanners?.MediaPath}`
    : "";

  console.log(context);
  return (
    <Section
      padding={padding}
      className={getClassName({
        // left: align === "left",
        // center: align === "center",
        hasImageBackground: image?.mode === "background",
      })}
      style={{
        padding: "50px",
        height: "400px",
        backgroundColor: "black",
      }}
    >
      {image?.mode === "background" && img && (
        <>
          <div
            className={getClassName("image")}
            style={{
              backgroundImage: `url("${img}")`,
              backgroundColor: "black",
              objectFit: "cover",
            }}
          ></div>

          <div className={getClassName("imageOverlay")}></div>
        </>
      )}

      <div className={getClassName("inner")}>
        <div className={getClassName("content")}>
          <h1>{sliderBanners?.Title || title}</h1>
          <p className={getClassName("subtitle")}>{description}</p>
          <div className={getClassName("actions")}>
            {buttons.map((button, i) => (
              <Button
                key={i}
                href={button.href}
                variant={button.variant}
                size="large"
                tabIndex={puck.isEditing ? -1 : undefined}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {align !== "center" && image?.mode !== "background" && img && (
          <div>
            <img
              src={img}
              style={{
                objectFit: "cover",
                width: "100%",
                objectPosition: "center",
              }}
            />
          </div>

          // <div
          //   style={{
          //     backgroundImage: `url('${img}')`,
          //     backgroundSize: "cover",
          //     backgroundRepeat: "no-repeat",
          //     backgroundPosition: "center",
          //     borderRadius: 24,
          //     height: 356,
          //     marginLeft: "auto",
          //     width: "100%",
          //   }}
          // />
        )}
      </div>
    </Section>
  );
}

export type HeroProps = {
  quote?: { index: number; label: string };
  title: string;
  description: string;
  align?: string;
  padding: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    more?: { text: string }[];
  }[];
  apiData: any;
  url: string;
  key: string;
};

export const HeroConfig: ComponentConfig<any> = {
  fields: {
    quote: {
      type: "external",
      placeholder: "Select a quote",
      showSearch: true,
      filterFields: {
        author: {
          type: "select",
          options: [
            { value: "", label: "Select an author" },
            { value: "Mark Twain", label: "Mark Twain" },
            { value: "Henry Ford", label: "Henry Ford" },
            { value: "Kurt Vonnegut", label: "Kurt Vonnegut" },
            { value: "Andrew Carnegie", label: "Andrew Carnegie" },
            { value: "C. S. Lewis", label: "C. S. Lewis" },
            { value: "Confucius", label: "Confucius" },
            { value: "Eleanor Roosevelt", label: "Eleanor Roosevelt" },
            { value: "Samuel Ullman", label: "Samuel Ullman" },
          ],
        },
      },

      fetchList: async ({ query, filters }) => {
        // Simulate delay
        await new Promise((res) => setTimeout(res, 500));

        return quotes
          .map((quote, idx) => ({
            index: idx,
            title: quote.author,
            description: quote.content,
          }))
          .filter((item) => {
            if (filters?.author && item.title !== filters?.author) {
              return false;
            }

            if (!query) return true;

            const queryLowercase = query.toLowerCase();

            if (item.title.toLowerCase().indexOf(queryLowercase) > -1) {
              return true;
            }

            if (item.description.toLowerCase().indexOf(queryLowercase) > -1) {
              return true;
            }
          });
      },
      mapRow: (item) => ({ title: item.title, description: item.description }),
      mapProp: (result) => {
        return { index: result.index, label: result.description };
      },
      getItemSummary: (item) => item.label,
    },
    title: { type: "text" },
    description: { type: "textarea" },
    buttons: {
      type: "array",
      min: 1,
      max: 4,
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "primary", value: "primary" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: { type: "text" },
        mode: {
          type: "radio",
          options: [
            { label: "background", value: "background" },

            { label: "inline", value: "inline" },
          ],
        },
      },
    },
    padding: { type: "text" },
  },
  label: "Banner",
  defaultProps: {
    title: "Hero",
    align: "left",
    description: "Description",
    buttons: [{ label: "Learn more", href: "#" }],
    padding: "64px",
    apiData: [],
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetSlider/BannerSlider555PortalMapping7",
    key: "sliderBanners", // for store data in context, we use this key as variable name
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
    image: {
      mode: "background",
    },
  },
  /**
   * The resolveData method allows us to modify component data after being
   * set by the user.
   *
   * It is called after the page data is changed, but before a component
   * is rendered. This allows us to make dynamic changes to the props
   * without storing the data in Puck.
   *
   * For example, requesting a third-party API for the latest content.
   */
  resolveData: async ({ props }, { changed }) => {
    if (!props.quote)
      return { props, readOnly: { title: false, description: false } };

    if (!changed.quote) {
      return { props };
    }

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      props: {
        title: quotes[props.quote.index].author,
        description: quotes[props.quote.index].content,
      },
      readOnly: { title: true, description: true },
    };
  },
  resolveFields: async (data, { fields }) => {
    if (data.props.align === "center") {
      return {
        ...fields,
        image: undefined,
      };
    }

    return fields;
  },
  render: (props) => <Hero {...props} />,
};
