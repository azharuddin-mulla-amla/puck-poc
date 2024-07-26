import { ComponentConfig } from "@measured/puck";
import React from "react";
import { useProvider } from "../../../context/RootProvider";

import styles from "./styles.module.css";
import getClassNameFactory from "../../../lib/get-class-name-factory";

const getClassName = getClassNameFactory("Header", styles);

function NavItem({ label, href }: { label: string; href: string }) {
  // const navPath = window?.location?.pathname?.replace("/edit", "") || "/";

  // const isActive = navPath === (href.replace("/edit", "") || "/");

  const El = href ? "a" : "span";

  return (
    <El
      href={href || "/"}
      style={{
        textDecoration: "none",
        color: "var(--puck-color-grey-02)",
        fontWeight: "400",
      }}
    >
      {label}
    </El>
  );
}

export function Header(props: any) {
  const context = useProvider();

  return (
    <header className={getClassName()}>
      <div className={getClassName("logo")}>LOGO</div>
      <nav className={getClassName("items")}>
        <NavItem label="Home" href={`${props.editMode ? "" : "/"}`} />
        <NavItem label="Pricing" href={props.editMode ? "" : "/pricing"} />
        <NavItem label="About" href={props.editMode ? "" : "/about"} />
      </nav>
    </header>
  );
}

export const HeaderConfig: ComponentConfig<{}> = {
  fields: {},
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
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetContainer",
    key: "header", // for store data in context, we use this key as variable name
    body: { CMSMappingId: 7 },
  },
  label: "Header",
  render: (props) => <Header key={props.id} {...props} />,
};
