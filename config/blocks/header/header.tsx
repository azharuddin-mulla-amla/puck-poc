import { ComponentConfig } from "@measured/puck";
import Link from "next/link";
import Image from "next/image";
import React, {
  FC,
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  FocusEventHandler,
  WheelEventHandler,
  useState,
} from "react";
import noImage from "../../../assets/no-image.png";

export function Logo(props: any) {
  const {
    source,
    alternate,
    logoWidth,
    logoHeight,
    customClass,
    dataTestSelector,
  } = props;

  return (
    <Link href="/" data-test-selector="linkLogoImage">
      <Image
        src={source !== "" ? source : noImage}
        alt={alternate || ""}
        className={customClass}
        width={logoWidth}
        height={logoHeight}
        data-test-selector={dataTestSelector}
        loading={"lazy"}
      />
    </Link>
  );
}

export const logos = [
  {
    name: "Maxwell logo",
    url: "https://znodetest.azureedge.net/znode10/3b7d2be1-a3ec-4dbe-84c5-95b687e11252Logo-Maxwell.svg",
  },
  {
    name: "Knox logo",
    url: "https://cp-knox-qa.amla.io/knox-logo@2x.png",
  },
  // {
  //   name: "ETNA logo",
  //   url: "https://cp-knox-qa.amla.io/knox-logo@2x.png",
  // },
];

export function LogoWrapper(props: any) {
  const { url } = props;
  return <Logo alternate="logo" logoWidth={200} logoHeight={60} source={url} />;
}

export function Input(props: any) {
  const {
    className,
    classPrefix = "input",
    as: Element = "input",
    type = "text",
    disabled,
    value,
    defaultValue,
    inputRef,
    id,
    size,
    plaintext,
    placeholder,
    readOnly,
    checked = false,
    defaultChecked,
    dataTestSelector,
    onPressEnter,
    onFocus,
    onBlur,
    onKeyDown,
    onChange,
    onWheel,
    ariaLabel,
    pattern,
    isLabelShow,
    label,
    labelCustomClass,
    labelDataTestSelector,
    name,
    isRequired = false,
  } = props;

  return (
    <>
      {isLabelShow && (
        <div className="pb-2">
          <label
            htmlFor={id}
            className={labelCustomClass}
            data-test-selector={`${labelDataTestSelector}`}
          >
            {label}
          </label>
          {isRequired ? (
            <span className="font-bold text-red-500"> *</span>
          ) : (
            <></>
          )}
        </div>
      )}
      <Element
        className={`input text-sm focus:outline-none px-2 pb-1
      ${className ? className + " " : ""}${classPrefix} ${
          size ? `input-${size}` : ""
        } 
      ${plaintext ? "input-plaintext" : ""} h-10`}
        type={type}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        ref={inputRef}
        id={id}
        readOnly={readOnly}
        checked={checked}
        defaultChecked={defaultChecked}
        data-test-selector={dataTestSelector}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" && onPressEnter) {
            onPressEnter(e);
          }
        }}
        onWheel={onWheel}
        aria-label={ariaLabel ? ariaLabel : "Input Field"}
        pattern={pattern ? pattern : ""}
        name={name}
        require={isRequired}
      />
    </>
  );
}

export function LoadingSpinner(props: any) {
  return (
    <svg
      width="100"
      className="loading-state"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      data-test-selector={props?.dataTestSelector}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeDasharray="160 110"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function LoaderComponent(props: any) {
  const {
    isLoading,
    isLoadingTextShow = false,
    height,
    width,
    color,
    showHeight,
    loaderText,
  } = props;

  const isLoadingTextDisplay = (isLoadingTextShow: boolean) => {
    return (
      <>
        {isLoadingTextShow ? (
          <p className="pl-1.5">{loaderText ? loaderText : "Loading"}</p>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <>
      {isLoading && (
        <div
          className={`flex items-center justify-center ${
            showHeight ? "h-80" : ""
          }`}
        >
          <LoadingSpinner height={height} width={width} color={color} />
          {isLoadingTextDisplay(isLoadingTextShow)}
        </div>
      )}
    </>
  );
}

export function Button(props: any) {
  const {
    as: Element = "button",
    active,
    block,
    className,
    children,
    color,
    disabled,
    loading,
    ripple = true,
    size: sizeProp,
    startIcon,
    endIcon,
    type: typeProp = "button",
    value,
    dataTestSelector,
    loadingText,
    loaderColor,
    loaderHeight,
    loaderWidth,
    ariaLabel,
    onClick,
    style,
    title,
    loaderText,
  } = props;
  const size = sizeProp ?? (block ? "lg" : "md");

  const getClasses = () => {
    const colorClasses = color
      ? `text-white bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`
      : "";
    const sizeClasses =
      size === "sm"
        ? "px-2.5 py-1.5 text-sm"
        : size === "md"
        ? "px-2 py-2 text-md"
        : "px-6 py-3 text-lg";
    const activeClasses = active ? "active:bg-opacity-50" : "";
    const blockClasses = block ? "w-full" : "";
    const disabledClasses = disabled
      ? "opacity-50 cursor-not-allowed"
      : loading
      ? "cursor-wait"
      : ripple
      ? "transition duration-300 ease-in-out transform-gpu"
      : "";

    return `${colorClasses} ${sizeClasses} ${activeClasses} ${blockClasses} ${disabledClasses} ${
      className ?? ""
    }`;
  };

  return (
    <Element
      title={title}
      type={typeProp}
      className={getClasses()}
      disabled={disabled || loading}
      onClick={onClick}
      value={value}
      data-test-selector={dataTestSelector}
      aria-label={
        ariaLabel ? ariaLabel : children ? `${children} button` : "Icon"
      }
      style={style}
    >
      {startIcon && <span className={children ? "mr-2" : ""}>{startIcon}</span>}
      {loading ? (
        <LoaderComponent
          loaderText={loaderText}
          isLoading={loading}
          isLoadingTextShow={loadingText}
          color={loaderColor}
          height={loaderHeight}
          width={loaderWidth}
        />
      ) : (
        children
      )}
      {endIcon && <span className={children ? "ml-2" : ""}>{endIcon}</span>}
    </Element>
  );
}

export function SearchIcon(props: any) {
  return (
    <svg
      id="icon-search"
      viewBox="0 0 30 20"
      height="25px"
      width="25px"
      {...props}
      data-test-selector={props?.dataTestSelector || props?.datatestselector}
    >
      <path
        d="M19.427 20.427c-1.39 0.99-3.090 1.573-4.927 1.573-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 1.837-0.583 3.537-1.573 4.927l5.585 5.585c0.55 0.55 0.546 1.431-0 1.976l-0.023 0.023c-0.544 0.544-1.431 0.546-1.976 0l-5.585-5.585zM14.5 20c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5v0z"
        fill={props.color}
      ></path>
    </svg>
  );
}

export function SearchBox(props: any) {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="relative rounded-cardBorderRadius border-2 border-gray-300">
        {isLoading ? (
          <div className="absolute right-0 top-0">
            <LoadingSpinner width="30px" height="30px" viewBox="0 0 130 80" />
          </div>
        ) : (
          <Button
            dataTestSelector="btnSearchIcon"
            startIcon={
              <SearchIcon
                viewBox="0 0 30 30"
                datatestselector="iconSearchBox"
                color="#757575"
              />
            }
            // onClick={handleSearchTerm}
            className={`absolute ${
              true ? "right-6" : "right-0"
            } top-0 border-0 bottom-0 border-none xs:focus:ring-0 xs:focus:ring-offset-0 xs:p-1.5 pt-1`}
            ariaLabel="search icon"
          />
        )}
        <Input
          // inputRef={searchRef}
          type="text"
          placeholder={props.placeholderTxt}
          // value={searchTerm}
          // onChange={handleInputChange}
          // onKeyDown={handleKeyDown}
          // onFocus={(e) => onSearchFocus(e)}
          className="xs:w-full sm:w-full md:block xs:border-none placeholder-black px-2 py-4 pb-4 shadow-md"
          dataTestSelector="txtSearch"
          ariaLabel="search box"
        />
      </div>
      {/* {searchTerm.length >= 3 && !isInputFocused && isAutocompleteOpen && productList && productList.length > 0 && (
      <ul
        ref={autocompleteRef}
        className="absolute right-0 left-0 mt-0 border-2 border-gray-300 border-t-0 bg-white shadow-md max-h-screen-80 overflow-y-auto z-10 w-auto custom-scroll"
        data-test-selector="listProductContainer"
      >
        {productList.map((product, index) => (
          <li
            key={product.ZnodeProductId}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index !== productList.length - 1 ? "border-b border-gray-300" : ""} flex items-center ${
              index === selectedItemIndex ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              debouncedHandleSearch(product?.Name);
              setIsAutocompleteOpen(false);
              handleProductClick(product);
            }}
            data-test-selector={`searchSuggestion${index}`}
          >
            <div className="mr-4 w-12" onClick={(e) => e.stopPropagation()} data-test-selector="divProductImageLink">
              <Link onClick={() => setSearchTerm(product?.Name)} href={product?.SEOUrl ? "/" + product?.SEOUrl : `/product/${product.ZnodeProductId}`} prefetch={false}>
                <ImageWrapper ImageLargePath={product.ImageThumbNailPath || ""} SEOTitle={product.Name} cssClass="h-12 object-contain" />
              </Link>
            </div>
            <div className="w-fit" data-test-selector="divProductLink">
              <div className="font-bold">
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchTerm(product?.Name);
                  }}
                  href={product?.SEOUrl ? "/" + product?.SEOUrl : `/product/${product.ZnodeProductId}`}
                  prefetch={false}
                >
                  {product.Name}
                </Link>
              </div>
              <div>
                in{" "}
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchTerm("");
                  }}
                  href={`/${product?.CategorySeoUrl}`}
                  className="text-blue-500"
                  prefetch={false}
                >
                  {product.CategoryName}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )} */}
      {/* {isInputFocused && isAutocompleteOpen && searchHistory && searchHistory.length > 0 && (
      <ul
        ref={autocompleteRefSearch}
        className="absolute right-0 left-0 mt-0 border border-gray-300 border-t-0 bg-white shadow-md max-h-screen-80 overflow-y-auto z-10 w-auto custom-scroll"
      >
        {searchHistory.map((history, index) => (
          <li
            key={index}
            className={`px-2 py-2 cursor-pointer hover:bg-gray-100 ${index !== searchHistory.length - 1 ? "border-b border-gray-300" : ""} flex items-center ${
              index === selectedItemIndexHistory ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              onSearchHistoryClicked(history);
              setIsAutocompleteOpen(false);
            }}
            data-test-selector={`searchHistorySuggestion${index}`}
          >
            <div className="mr-2">
              <LeftSearchArrow />
            </div>
            {history}
          </li>
        ))}
      </ul>
    )} */}
    </div>
  );
}

export function CartIcon(props: any) {
  return (
    <svg
      viewBox="0 0 25 20"
      height="25px"
      width="25px"
      {...props}
      data-test-selector={props?.dataTestSelector}
    >
      <path
        d="M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"
        fill="black"
      ></path>
    </svg>
  );
}

export function CartCount() {
  return (
    <div className="text-lg">
      <CartIcon />
      {/* {currentCartCount !== undefined && currentCartCount !== null ? (
        <span
          data-test-selector="spnCartIcon"
          className="absolute -right-1 -top-2 h-4 
        rounded-full text-xs text-center leading-tight bg-cyan-700 text-white px-1"
        >
          {currentCartCount}
        </span>
      ) : (
        <></>
      )} */}
    </div>
  );
}
export function TopMenu(props: any) {
  return (
    <div
      aria-label="top-menu"
      className="flex flex-col items-start my-0 lg:flex-row lg:justify-between lg:items-center lg:mt-2 lg:mb-2 text-sm"
    >
      {/* <IdleTimeout timeout={CONFIG.SESSION_TIMEOUT} onTimeout={handleTimeout} /> */}
      <div className="relative flex items-center justify-center">
        <div
          // onClick={() => {
          //   setIsMenuOpen(true);
          // }}
          data-test-selector="linkQuickOrder"
          className="border-r-2 border-black font-semibold px-4 cursor-pointer"
        >
          Quick Order
        </div>

        {/* {isMenuOpen && (
          <div className="absolute top-10  z-20 bg-white border border-gray-200 rounded-cardBorderRadius shadow-md w-96">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-white -top-2 rotate-45 z-0 border border-gray-200 ml-4"></div>
            </div>
            <div className="relative z-20 bg-white p-2">
              <DynamicFormTemplate
                defaultRowCount={1}
                buttonText={t("AddToCart")}
                showAddNewField={false}
                showClearAllButton={false}
                buttonPosition="bottom"
                showFieldClearButton={false}
                onButtonSubmit={closeMenu}
                showHeading={false}
                showMultipleItemsButton={true}
                showFullWidthResult={true}
              />
            </div>
          </div>
        )} */}
      </div>
      <div className="border-r-2 border-black px-4">
        {/* <ChangeLocale languageLocales={portalLocales} /> */}
      </div>
      <div className="hidden lg:flex">
        {/* {useDetails ? (
          <div
            className="border-r-2 border-black font-semibold px-5 xs:hidden lg:flex"
            data-test-selector="divSignIn"
          >
            <DropMenu
              name={useDetails?.FirstName}
              onLogout={logoutHandler}
              isEnableReturnRequest={enableReturnRequest}
              isAccountUser={
                useDetails &&
                useDetails.RoleName?.toLowerCase() ===
                  CONSTANT.AdministratorRoleName.toLocaleLowerCase()
              }
            />
          </div>
        ) : (
         
        )} */}
        <Link
          href={"/login"}
          className="border-r-2 border-black font-semibold px-5"
          data-test-selector="linkSignIn"
        >
          Sign In
        </Link>
      </div>
      <Link
        href={"/cart"}
        data-test-selector="linkCartPage"
        className="hidden lg:block"
        prefetch={false}
      >
        <div className="relative text-black pl-5" title="Cart">
          <CartCount />
          {props.currentCartCount !== undefined &&
          props.currentCartCount !== null ? (
            <span
              data-test-selector="spnCartIcon"
              className="absolute -right-1 -top-2 h-4 
            rounded-full text-xs text-center leading-tight bg-cyan-700 text-white px-1"
            >
              {props.currentCartCount}
            </span>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
}

// export function NavigationBar() {
//   return (
//     <nav>
//       <ul
//         className="flex items-center uppercase font-semibold gap-6 mt-1"
//         data-test-selector="listNavigationContainer"
//       >
//         {
//           <li className="self-end" data-test-selector="listShopDepartment">
//             <button
//               className="text-sm font-medium uppercase w-full text-start py-1"
//               onClick={() => displayMenu()}
//               data-test-selector="btnShopDepartment"
//             >
//               <span>{t("ShopDepartment")}</span>
//             </button>
//             <MegaMenu
//               type={CONSTANT.Desktop}
//               customClass="mega-menu absolute left-0 top-full"
//               isVisible={isMenuShown}
//             />
//           </li>
//         }
//         <li className="border-none">{children}</li>
//       </ul>
//     </nav>
//   );
// }

// export function NavigationWrapper() {
//   return (
//     <>
//       <NavigationBar>
//         {/* @ts-ignore */}
//         <NavigationLinkPanel />
//       </NavigationBar>
//     </>
//   );
// }

export function Header(props: any) {
  const portalHeader = {
    PortalId: 7,
    LocaleId: 1,
    PublishState: 3,
    PublishCatalogId: 5,
  };

  const requiredProperties = [
    "MediaServerUrl",
    "WebsiteLogo",
    { key: "AttributeCode", value: "EnableReturnRequest" },
    "PortalLocales",
    "PortalFeatureValues",
  ];

  const domainName = "webstore-qa-znode.amla.io";

  return (
    <header className="w-full bg-headerBgColor shadow-md z-40 sticky top-0 mb-4 no-print">
      <div className="desktop-header hidden lg:block ">
        <div className="flex justify-between items-center gap-3 py-6 px-4">
          <div className="pr-3" data-test-selector="divLogoImage">
            <LogoWrapper url={props.logo.url} />
          </div>
          <div
            className="flex-1 flex items-center bg-green-300 relative "
            data-test-selector="divSearchText"
          >
            <div className="w-full">
              <SearchBox
                enableBarcodeScanner={false}
                placeholderTxt={props.searchBarPlaceholder}
              />
            </div>
            {/* {enableBarcodeScanner && <div className=" absolute right-1 ">
                <BarcodeScanner />
              </div>} */}
          </div>

          <TopMenu
            // enableReturnRequest={enableReturnRequest as boolean}
            // portalLocales={PortalLocales}
            currentCartCount={0}
          />
        </div>
        <div
          className="navigation flex items-center py-1 px-4 mt-1"
          data-test-selector="divLogoImage"
        >
          <div className="order-2">{/* <NavigationWrapper /> */}</div>
        </div>
      </div>
      <div className="mobile-header lg:hidden no-print">
        {/* <MobileHeader
            logoDetails={{ MediaServerUrl, WebsiteLogo }}
            enableReturnRequest={enableReturnRequest as boolean}
            portalLocales={PortalLocales}
            enableBarcodeScanner={enableBarcodeScanner as boolean}
          >
            <Wrapper
              widgetName="DesktopNavigation"
              widgetKey="22530"
              widgetCode="LinkPanel"
              typeOfMapping="PortalMapping"
              displayName="Desktop Navigation"
              cMSMappingId={portalHeader?.PortalId || 0}
              contentOrientation="vertical"
              customClass="px-4 py-2"
            ></Wrapper>
          </MobileHeader> */}
      </div>
    </header>
  );
}

export const HeaderConfig: ComponentConfig<{}> = {
  fields: {
    logo: {
      type: "external",
      placeholder: "Select a Logo",
      showSearch: false,

      fetchList: async ({ query, filters }) => {
        // Simulate delay
        await new Promise((res) => setTimeout(res, 500));

        return logos.map((logo, idx) => ({
          index: idx,
          name: logo.name,
          url: logo.url,
        }));
      },
      mapRow: (item) => ({
        Name: item.name,
      }),
    },
    searchBarPlaceholder: { type: "text", label: "Search Bar Placeholder" },
  },
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
    logo: {
      index: 1,
      name: "ETNA logo",
      url: "https://cp-knox-qa.amla.io/knox-logo@2x.png",
    },
    searchBarPlaceholder: "Search By Part # or Name",
  },
  label: "Header",
  render: (props) => <Header key={props.id} {...props} />,
};
