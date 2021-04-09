/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:12:48
 * @modify date 2021-04-09 14:12:48
 * @desc [description]
 */
import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  TEXTDISABLED: "textDisabled",
  TEXTSUBTLE: "textSubtle",
  BINANCE: "binance",
  FAILURE: "failure",
} as const;

export const scales = {
  MD: "md",
  SM: "sm",
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];

export interface TagProps extends SpaceProps {
  variant?: Variant;
  scale?: Scale;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
}
