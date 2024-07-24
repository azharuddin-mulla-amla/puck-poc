import React from "react";
import { Products } from "../../config/blocks-v1/products/products1";
import { Slider } from "../../config/blocks-v1/slider/slider1";
import { Footer } from "../../config/blocks-v1/footer/footer";
import Setting from "../../components/Setting";
import Profile from "../../components/Profile";
import About from "../../components/About";

async function page() {
  return (
    <div>
      <Products type="Products_1" />
      <Products type="Products_2" />
      <Products type="Products_3" />
      <Products type="Products_4" />
      <Products type="Products_5" />
      <Products type="Products_6" />
      <Slider type="Slider_1" />
      <Footer type="Footer" />
      <Setting type="Setting" />
      <Profile type="Profile" />
      <Profile type="Profile" />
      <Profile type="Profile" />
      <About type="About" />
      <About type="About" />
      <About type="About" />
      <About type="About" />
    </div>
  );
}

export default page;
