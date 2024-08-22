/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bodyColor: "var(--secondary)",
        textColor: "var(--primary)",
        primaryBtnTextColor: "var(--primary-btn-text)",
        secondaryBtnTextColor: "var(--secondary-btn-text)",
        linkColor: "var(--link)",
        hoverColor: "var(--hover)",
        successColor: "var(--success)",
        errorColor: "var(--error)",
        navColor: "var(--navigation-text)",
        separatorColor: "var(--separator)",
        breadCrumbsTextColor: "var(--breadcrumbs-text)",
        accentColor: "var(--accent)",
        widgetEditBar: "var(--widget-edit-bar)",
      },
      backgroundColor: {
        navBgColor: "var(--navigation-bar-bg)",
        primaryBtnBgColor: "var(--primary-btn-bg)",
        secondaryBtnBgColor: "var(--secondary-btn-bg)",
        headerBgColor: "var(--header-bg)",
        footerBgColor: "var(--footer-bg)",
      },
      borderColor: {
        inputBorderColor: "var(--input-border)",
        btnBorderColor: "var(--btn-border)",
        cardBorderColor: "var(--card-border)",
      },
      maxHeight: {
        "screen-50": "50vh",
        "screen-80": "80vh",
      },
      width: {
        "92vw": "92vw",
      },
      borderRadius: {
        btnBorderRadius: "var(--btn-border-radius)",
        cardBorderRadius: "var(--card-radius)",
        inputBorderRadius: "var(--input-radius)",
      },
      gridAutoRows: {
        "1fr": "1fr",
      }
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}

