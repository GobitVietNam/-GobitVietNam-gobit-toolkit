/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:34:52
 * @modify date 2021-04-09 13:34:52
 * @desc [description]
 */
import { MouseEvent, ReactNode } from "react";

export type AlertTheme = {
  background: string;
};

export const variants = {
  INFO: "info",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
} as const;

export type Variants = typeof variants[keyof typeof variants];

export interface AlertProps {
  variant?: Variants;
  title: string;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
