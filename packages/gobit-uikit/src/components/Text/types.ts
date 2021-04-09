/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:13:08
 * @modify date 2021-04-09 14:13:08
 * @desc [description]
 */
import { SpaceProps, TypographyProps } from "styled-system";

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
