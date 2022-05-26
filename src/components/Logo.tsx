import React, { FC } from "react";
import logoImg from "images/logo.svg";

export interface LogoProps {
  src?: string;
}
const Logo: FC<LogoProps> = ({ src }) => {
  return (
    <img
      className="max-h-12 w-auto flex-shrink-0"
      src={src || logoImg}
      alt="logo"
    />
  );
};

export default Logo;
