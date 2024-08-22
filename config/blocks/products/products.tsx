import { ComponentConfig } from "@measured/puck";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useProvider } from "../../../context/RootProvider";
import { getData } from "../../../services-v1";
import { RenderBlock } from "../../components/render-block/renderBlock";
import { CardSlider } from "../../components/carousel/cardSlider";
import Link from "next/link";
import noImage from "../../../assets/no-image.png";
import { Button } from "../../components/button/button";
import { StarRatingIcon } from "../../components/icons/icon";
// import { useFormatter } from "next-intl";
// function Card(props: any) {
//   const img = props?.WebStoreProductModel?.ImageMediumPath ?? "";
//   console.log(img);
//   return (
//     <div
//       style={{
//         padding: 20,
//         // backgroundColor: "#ccc",
//         borderRadius: 5,
//         borderColor: "#ccc",
//         borderWidth: 0.5,
//         borderStyle: "solid",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         // boxShadow: "0px 1px 5px -1px rgba(0,0,0,0.75)",
//       }}
//     >
//       <img src={img} alt="t-shirt" />
//       <h3>Title</h3>
//       <p>description....</p>
//       <span
//         style={{
//           fontSize: 20,
//         }}
//       >
//         $12.90
//       </span>
//     </div>
//   );
// }

// export function Products(props: any) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:3000/api/wrapper", {
//         method: "POST",
//         body: JSON.stringify({
//           url: props.url,
//           dataKey: props.dataKey,
//           body: props.body,
//         }),
//       });
//       const responseData = await response.json();
//       setProducts(responseData?.data?.Products ?? []);
//     }
//     fetchData();
//   }, []);

//   return (
//     <section
//       style={{
//         margin: "50px",
//         overflow: "hidden",
//       }}
//     >
//       <h2>Products</h2>
//       <div
//         style={
//           props.display.mode === "grid"
//             ? {
//                 display: "grid",
//                 gap: 50,
//                 gridTemplateColumns:
//                   "repeat(auto-fill, minmax(200px, max-content))",
//                 margin: "50px",
//               }
//             : {
//                 display: "flex",
//                 overflowX: "auto",
//                 gap: 50,
//               }
//         }
//       >
//         {products?.map((item: any, idx: number) => {
//           return (
//             <Card
//               {...item}
//               key={item?.WebStoreProductModel?.ImageMediumPath + idx}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

function StarRating({
  isVisible,
  disableActions,
  ratingValue,
  handleRatingClick,
}: any) {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    ratingValue ? setRating(+ratingValue.toFixed()) : setRating(0);
  }, [ratingValue]);

  const getClasses = () => {
    const disabledActions = disableActions ? "pointer-events-none" : "";
    return `${disabledActions}`;
  };

  const updateRatingValue = (i: number) => {
    setRating(i);
    handleRatingClick && handleRatingClick(i);
  };

  const renderRatings = () => {
    return [...Array(5)].map((ele, index: number) => {
      index += 1;
      const ratingStatus = index <= rating ? "on" : "off";
      return (
        <Button
          key={index}
          className={`xs:px-0 xs:py-0 border-none 
            xs:focus:ring-0 xs:focus:ring-offset-0"
            ${ratingStatus} ${getClasses()}`}
          onClick={() => updateRatingValue(index)}
          startIcon={
            <StarRatingIcon viewBox="0 0 45 30" height="15px" width="15px" />
          }
          dataTestSelector={`starRating${index}`}
          ariaLabel="star rating icon"
        ></Button>
      );
    });
  };

  return (
    <>{isVisible && <div className="star-rating">{renderRatings()}</div>}</>
  );
}

export function RatingWrapper(props: any) {
  const { ratingCount, productReviews, showReview, productUrl, totalReviews } =
    props;
  return (
    <>
      <div className="mt-1" data-test-selector="divRating">
        <span data-test-selector="spnStarRating">
          <StarRating isVisible disableActions ratingValue={ratingCount} />
        </span>
      </div>
      <span
        className="text-sm text-zinc-700 whitespace-nowrap"
        data-test-selector="spnRatingCount"
      >
        {Math.round(ratingCount)} |{" "}
        {`(${
          totalReviews ||
          (productReviews && productReviews?.productReviewsCount
            ? productReviews?.productReviewsCount
            : productReviews && productReviews.length) ||
          0
        })`}
      </span>
      {showReview &&
        (productUrl ? null : ( // <LinkWrapper productUrl={productUrl} />
          <div
            id="readRating"
            className=" cursor-pointer
            text-linkColor 
            hover:text-blue-500 underline decoration-blue-800 hover:decoration-blue-500 ml-1 whitespace-nowrap"
            data-test-selector="divReadReviews"
          >
            Read reviews
          </div>
        ))}
    </>
  );
}

export function usePriceFormatter(price: number, currencyCode: string) {
  // const format = useFormatter();
  const [formattedPrice, setFormattedPrice] = useState<string>("");

  useEffect(() => {
    const formatPrice = async () => {
      if (price !== undefined && currencyCode) {
        // const result = await format.number(price, {
        //   style: "currency",
        //   roundingPriority: "auto",
        //   currency: currencyCode || "USD",
        //   maximumFractionDigits: 2,
        // });
        setFormattedPrice(`${price}$`);
      } else {
        setFormattedPrice("");
      }
    };

    formatPrice();
  }, [price, currencyCode]);

  return formattedPrice;
}

function FormatPriceWithCurrencyCode(props: any) {
  const { Price, CurrencyCode } = props;
  const formattedValue = usePriceFormatter(Price, CurrencyCode);
  return <>{formattedValue}</>;
}

export default function FeaturedProductCard({
  key,
  product,
  highlightInfo,
  portalData,
}: any) {
  const [currencyCode, setCurrencyCode] = useState<string>();
  // const { productInfo } = useContext(Context);
  // const productDetails = productInfo && productInfo.product;
  const [userData, setUserData] = useState<any>();
  const [loadKey, setLoadKey] = useState<number>(0);

  const [imgSrc, setImgSrc] = useState(false);

  const getDetails = async () => {
    // const userData = await getSavedUserSession();
    // setUserData(userData);
  };

  useEffect(() => {
    getDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getCurrencyData = useCallback(async () => {
    portalData?.CurrencyCode && setCurrencyCode(portalData?.CurrencyCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCurrencyData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    Name,
    discountAmount,
    Sku,
    RetailPrice,
    SalesPrice,
    productDataType,
    PublishProductId,
    Rating,
    SKU,
    highlightImgProp,
    highlightLink,
    TotalReviews,
  } = product;

  let { ImageSmallPath } = product;
  const newImageSmallPath = ImageSmallPath?.replace(/\\/g, "/");
  ImageSmallPath = newImageSmallPath;

  const productId =
    product?.PublishProductId && product?.PublishProductId > 0
      ? product?.PublishProductId
      : product?.ZnodeProductId
      ? Number(product?.ZnodeProductId)
      : 0;

  const productUrl = product?.SEOUrl
    ? "/" + product?.SEOUrl
    : `/product/${productId}`;
  const isSalesPriceShow = SalesPrice !== 0 && SalesPrice !== null;
  // const isObsolete = product.Attributes?.find(
  //   (a) => a?.AttributeCode?.toLowerCase() === CONSTANT.IsObsolete.toLowerCase()
  // )?.AttributeValues;
  // const t = useTranslationMessages("Index");

  return (
    <>
      <div
        className="product-card p-4 block card bg-white hover:shadow-lg relative w-full"
        data-test-selector={`divProductImage${productId}`}
      >
        <div>
          <div className="flex-none relative w-auto">
            <Link
              href={""}
              data-test-selector={`linkProductUrl${productId}`}
              className="flex justify-center items-center w-auto"
            >
              <div className=" flex relative h-52 w-52">
                <Image
                  alt={Name || ""}
                  className="m-auto object-contain w-auto"
                  src={
                    (!imgSrc
                      ? ImageSmallPath
                      : key === loadKey
                      ? noImage
                      : ImageSmallPath) || ""
                  }
                  width={250}
                  height={500}
                  style={{ width: "auto", height: "inherit" }}
                  onError={() => {
                    setImgSrc(true);
                    setLoadKey(key);
                  }}
                />
              </div>
            </Link>
            {/* <div
              className="hidden quick-view cursor-pointer absolute top-0 left-0"
              data-test-selector={`divQuickView${productId}`}
            >
              <Tooltip message="Quick View" isShow={true}>
                <QuickView productId={PublishProductId || 0} />
              </Tooltip>
            </div> */}
          </div>
        </div>

        <div className="flex-none mt-4 pb-2">
          <div
            className="mt-4"
            data-test-selector={`divProductDetails${productId}`}
          >
            <Link
              href={productUrl}
              data-test-selector={`linkProductName${productId}`}
            >
              <h3 className="mb-2 text-md font-medium leading-tight break-words">
                {Name}
              </h3>
            </Link>
            <div
              className="mb-2 w-24"
              data-test-selector="divYouMayAlsoLikeProductSKU"
            >
              <p className="text-xs break-words">
                <span data-test-selector={`spnProductSkuLabel${productId}`}>
                  SKU:{" "}
                </span>
                <span data-test-selector={`spnProductSku${productId}`}>
                  {SKU}
                </span>
              </p>
            </div>
            <div className="flex items-center -mt-2">
              <RatingWrapper
                ratingCount={Rating || 0}
                productReviews={product?.ProductReviews || []}
                showReview={true}
                productUrl={productUrl}
                totalReviews={TotalReviews}
              />
            </div>
            {/* {highlightInfo && (
              <ProductHighlights
                highlights={highlightInfo}
                productId={productId}
              />
            )} */}
            {highlightImgProp && (
              <div
                className="product_highlight"
                data-test-selector={`divProductHighlight${productId}`}
              >
                <div id="product-highlights" className="">
                  <ul className="p-0 list-unstyled d-flex flex-wrap">
                    <li className="d-flex align-items-center justify-content-center pr-2 w-12 h-12 mb-2 ">
                      <Link
                        href={highlightLink || ""}
                        id="highlightInfo"
                        data-test-selector="linkHighlight"
                      >
                        <Image
                          className="img-fluid"
                          alt={Name || ""}
                          width={50}
                          height={50}
                          src={highlightImgProp}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {(portalData?.isUserLoggedIn === "false" || userData) && (
              <div
                className="price text-xl text-linkColor font-semibold"
                data-test-selector={`divProductPrice${productId}`}
                data-sku={Sku}
                data-type={productDataType}
              >
                {isSalesPriceShow ? (
                  <span
                    className="pr-3"
                    data-test-selector={`spnPrice${productId}`}
                  >
                    <FormatPriceWithCurrencyCode
                      Price={SalesPrice || 0}
                      CurrencyCode={currencyCode || "USD"}
                    />
                  </span>
                ) : (
                  <span
                    className="pr-3"
                    data-test-selector={`spnPrice${productId}`}
                  >
                    <FormatPriceWithCurrencyCode
                      Price={RetailPrice || 0}
                      CurrencyCode={currencyCode || "USD"}
                    />
                  </span>
                )}
                {isSalesPriceShow && RetailPrice && (
                  <span
                    className="text-stone-400 line-through"
                    data-test-selector={`spnSalesPrice${productId}`}
                  >
                    <FormatPriceWithCurrencyCode
                      Price={RetailPrice || 0}
                      CurrencyCode={currencyCode || "USD"}
                    />
                  </span>
                )}
                {discountAmount && (
                  <span
                    className="cut-price text-slate-300 line-through ml-1"
                    data-test-selector={`spnDiscountAmount${productId}`}
                  >
                    <FormatPriceWithCurrencyCode
                      Price={discountAmount || 0}
                      CurrencyCode={currencyCode || "USD"}
                    />
                  </span>
                )}
              </div>
            )}
            {/* {
              <LoginToSeePricing
                isLogIn={
                  portalData?.isUserLoggedIn === CONSTANT.TrueValue || false
                }
                isObsolete={isObsolete || false}
                productUrl={""}
              />
            } */}
          </div>
        </div>
      </div>
      {/* {productDetails && productDetails.SKU === product?.SKU && (
        <Modal
          size="5xl"
          modalId="QuickView"
          maxHeight="lg"
          customClass="overflow-y-auto"
        >
          <QuickViewDetails productDetails={productInfo} />
        </Modal>
      )} */}
    </>
  );
}

export function ProductList(props: any) {
  // const [products, setProducts] = useState([]);
  const [featuredProductData, setFeaturedProductData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/wrapper", {
        method: "POST",
        body: JSON.stringify({
          url: props.url,
          dataKey: props.dataKey,
          body: props.body,
        }),
      });
      const responseData = await response.json();
      setFeaturedProductData(responseData?.data ?? null);
    }
    fetchData();
  }, []);

  const getValuesFromAttributes = (portalData: any, key: string) => {
    const value = portalData?.GlobalAttributes?.Attributes?.find(
      (a: { AttributeCode?: string }) =>
        a.AttributeCode?.toLowerCase() === key.toLowerCase()
    )?.AttributeValue;
    return value ? JSON.parse(value) : value;
  };

  const getFilteredFeaturedProductData = (FeaturedProduct: any[]) => {
    const filteredFeatureProductData = FeaturedProduct?.map((product: any) => ({
      Name: product?.WebStoreProductModel?.Name,
      discountAmount: product?.WebStoreProductModel?.discountAmount,
      RetailPrice: product?.WebStoreProductModel?.RetailPrice,
      SalesPrice: product?.WebStoreProductModel?.SalesPrice,
      productDataType: product?.WebStoreProductModel?.productDataType,
      PublishProductId: product?.WebStoreProductModel?.PublishProductId,
      IsObsolete: getValuesFromAttributes(
        featuredProductData?.portalData?.Attributes,
        "IsObsolete"
      ),
      Rating: product?.WebStoreProductModel?.Rating,
      SKU: product?.WebStoreProductModel?.SKU,
      highlightImgProp: product?.WebStoreProductModel?.highlightImgProp,
      highlightLink: product?.WebStoreProductModel?.highlightLink,
      TotalReviews: product?.WebStoreProductModel?.TotalReviews,
      ImageSmallPath: product?.WebStoreProductModel?.ImageSmallPath,
      HighlightList: product?.HighlightList,
    }));
    return filteredFeatureProductData;
  };

  const filteredProductData = getFilteredFeaturedProductData(
    featuredProductData?.Products ?? []
  );

  const filteredPortalData = {
    isUserLoggedIn: "false",
    CurrencyCode: "USD",
  };

  const renderFeatureProducts = (featureData: any[]) => {
    return (
      <>
        {featureData.map((product: any, index: number) => (
          <FeaturedProductCard
            key={index}
            product={product}
            highlightInfo={product?.HighlightList}
            portalData={filteredPortalData}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {filteredProductData && filteredProductData.length > 0 && (
        <>
          {/* <AddToCartNotificationWrapper /> */}
          <div className="mt-4">
            <div
              className="separator border-b pt-0 pb-3 text-center"
              data-test-selector="divFeaturedProductsLabel"
            >
              <RenderBlock blockKey={"FeaturedProductTitle"} />
            </div>
            <div data-test-selector="divFeaturedProductsCard">
              <CardSlider hasGrid={props.display?.mode === "grid"}>
                {renderFeatureProducts(filteredProductData)}
              </CardSlider>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export const ProductsConfig: ComponentConfig<{}> = {
  fields: {
    display: {
      type: "object",
      objectFields: {
        mode: {
          type: "radio",
          options: [
            { label: "scroll", value: "scroll" },

            { label: "grid", value: "grid" },
          ],
        },
      },
    },
  },

  resolveData: async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);

    const data = await response.json();
    console.log("resolve", data);
    return {
      props: {
        postData: data,
        postUrl: url,
      },
    };
  },
  defaultProps: {
    apiData: [],
    url: "https://apigateways-qa-znode.amla.io/WebStoreWidget/GetProducts/ProductList666PortalMapping7?expand=Promotions,Pricing,Seo,AssociatedProducts,Inventory,ProductReviews,ProductTemplate",
    dataKey: "products", // for store data in context, we use this key as variable name
    body: {
      LocaleId: 1,
      PublishCatalogId: 5,
      WidgetKey: "666",
      WidgetCode: "ProductList",
      TypeOfMapping: "PortalMapping",
      DisplayName: "FEATURED PRODUCT WIDGET",
      CMSMappingId: 7,
      PortalId: 7,
    },
    display: {
      mode: "scroll",
    },
  },
  label: "Products",
  render: (props) => {
    const { id, ...restProps } = props;
    return (
      <>
        <ProductList key={id} {...restProps} />
      </>
    );
  },
};
