import React from "react";

export type TypographyProps = {
  children: string;
  variant: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3";
};

const classNames = {
  h1: "font-bold text-secondary-300 text-2xl tracking-tight",
  h2: "font-bold text-secondary-300 text-xl tracking-tight",
  h3: "font-bold text-secondary-300 text-lg tracking-tight",
  h4: "font-bold text-secondary-300 text-sm tracking-tighter",
  body1: " text-secondary-200 text-base",
  body2: " text-secondary-200 text-[15px]",
  body3: "font-semibold text-secondary-200 text-[13px]",
};

const Typography = ({ children, variant }: TypographyProps) => {
  let Element: React.ElementType;
  switch (variant) {
    case "body1":
    case "body2":
    case "body3":
      Element = "p";
      break;
    default:
      Element = variant;
      break;
  }
  return <Element className={`${classNames[variant]}`}> {children} </Element>;
};

export default Typography;
