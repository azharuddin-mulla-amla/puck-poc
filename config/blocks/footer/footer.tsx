import { ComponentConfig } from "@measured/puck";
import React from "react";
import { Section } from "../../components/section/section";

function FooterLink(props: any) {
  const El = props.href ? "a" : "span";

  return (
    <li style={{ paddingBottom: 8 }}>
      <El
        href={props.href}
        style={{
          textDecoration: "none",
          fontSize: "14px",
          color: "var(--puck-color-grey-05)",
        }}
      >
        {props.children}
      </El>
    </li>
  );
}

function FooterList(props: any) {
  return (
    <div>
      <h3
        style={{
          margin: 0,
          padding: 0,
          fontSize: "inherit",
          fontWeight: "600",
          color: "var(--puck-color-grey-03)",
        }}
      >
        {props.title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          paddingTop: 12,
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}

export function Footer(props: any) {
  return (
    <footer style={{ background: "#eee", padding: "50px" }}>
      <h2 style={{ visibility: "hidden", height: 0, margin: 0 }}>Footer</h2>
      <Section padding="50px">
        <div
          style={{
            display: "grid",
            gridGap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            padding: 50,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FooterList title="Section">
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
          </FooterList>
          <FooterList title="Section">
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
          </FooterList>
          <FooterList title="Section">
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
          </FooterList>
          <FooterList title="Section">
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
            <FooterLink href="">Label</FooterLink>
          </FooterList>
        </div>
      </Section>
      <div
        style={{
          padding: 64,
          textAlign: "center",
          background: "#ccc",
        }}
      >
        Made by{" "}
        <a
          href="https://measured.co"
          target="_blank"
          style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
          rel="noreferrer"
        >
          Measured
        </a>
      </div>
    </footer>
  );
}

export const FooterConfig: ComponentConfig<{}> = {
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
    url: "https://jsonplaceholder.typicode.com/posts",
    key: "footer", // for store data in context, we use this key as variable name
  },
  label: "Footer",
  render: (props) => <Footer {...props} />,
};
