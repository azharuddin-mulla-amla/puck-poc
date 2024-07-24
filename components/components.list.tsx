import About from "./About";
import Profile from "./Profile";
import Setting from "./Setting";

// export const COMPONENTS = new Map([
//   ["Setting", Setting],
//   ["Profile", Profile],
//   ["About", About],
// ]);

export const COMPONENTS = new Map([
  [
    "Setting",
    {
      Component: Setting,
      url: "https://jsonplaceholder.typicode.com/posts",
    },
  ],
  [
    "Profile",
    {
      Component: Profile,
      url: "https://jsonplaceholder.typicode.com/posts",
    },
  ],
  [
    "About",
    {
      Component: About,
      url: "https://jsonplaceholder.typicode.com/posts",
    },
  ],
]);
