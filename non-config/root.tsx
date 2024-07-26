import About from "./blocks/About";
import Profile from "./blocks/Profile";
import Setting from "./blocks/Setting";

export const ALL_NON_CONFIG = new Map([
  [
    "Setting",
    {
      Component: Setting,
      url: "https://jsonplaceholder.typicode.com/posts",
      key: "settings",
      body: {},
      label: "Settings",
    },
  ],
  [
    "About",
    {
      Component: About,
      url: "https://jsonplaceholder.typicode.com/posts",
      key: "about",
      body: {},
      label: "About",
    },
  ],
]);
