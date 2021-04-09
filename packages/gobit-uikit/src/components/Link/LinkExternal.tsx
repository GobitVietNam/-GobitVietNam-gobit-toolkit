/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:40:32
 * @modify date 2021-04-09 13:40:32
 * @desc [description]
 */
import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <OpenNewIcon color="primary" ml="4px" />
    </Link>
  );
};

export default LinkExternal;
