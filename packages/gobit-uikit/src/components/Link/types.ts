/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:40:36
 * @modify date 2021-04-09 13:40:36
 * @desc [description]
 */
import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}
