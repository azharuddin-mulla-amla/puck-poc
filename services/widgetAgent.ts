import { WebStoreWidget_getSlider } from "./api/ZnodeWebstoreMultifrontClient";

export async function generateKey(parameter: any) {
  try {
    if (
      parameter?.WidgetCode &&
      parameter.WidgetKey &&
      parameter.TypeOfMapping &&
      parameter.CMSMappingId
    ) {
      return (
        parameter.WidgetCode +
        parameter.WidgetKey +
        parameter.TypeOfMapping +
        parameter.CMSMappingId
      );
    }
  } catch (error) {
    // logger.error(AREA.Widget, ErrorStack(error));
    return {} as string;
  }
}

//For Sliders
export async function getSliderData(props: any) {
  debugger;
  try {
    // key =  "BannerSlider555PortalMapping7"
    // baseURL = "https://apigateways-qa-znode.amla.io/"
    // endpoint = "WebStoreWidget/GetSlider/{key}"
    const key = await generateKey(props);
    let dataSlider: any;
    if (key) dataSlider = await WebStoreWidget_getSlider(key, props);
    return dataSlider.Slider;
  } catch (error) {
    console.log("error---", error);
    // logger.error(AREA.Widget, ErrorStack(error));
    return {};
  }
}
