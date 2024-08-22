import React from "react";
// import LoaderComponent from "../LoaderComponent/LoaderComponent";

interface ButtonProps {
  as?: React.ElementType;
  active?: boolean;
  style?: React.CSSProperties;
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
  classPrefix?: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean;
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  value?: string;
  dataTestSelector: string;
  loadingText?: boolean;
  loaderColor?: string;
  loaderHeight?: string;
  loaderWidth?: string;
  ariaLabel?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  loaderText?: string;
}

export function Button(props: ButtonProps) {
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
    ariaLabel,
    onClick,
    style,
    title,
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
      {/* {loading ? (
        <LoaderComponent loaderText={loaderText} isLoading={loading} isLoadingTextShow={loadingText} color={loaderColor} height={loaderHeight} width={loaderWidth} />
      ) : (
        children
      )} */}
      {children}
      {endIcon && <span className={children ? "ml-2" : ""}>{endIcon}</span>}
    </Element>
  );
}
