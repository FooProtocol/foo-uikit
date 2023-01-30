import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return <img src="https://raw.githubusercontent.com/casweeney/Polygon-4SOS/main/logo-text.png" alt="Fooswap" />;
};

export default Logo;
