/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:14:06
 * @modify date 2021-04-09 14:14:06
 * @desc [description]
 */
import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
}

export interface HandleProps {
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  handleHeight: "handleHeight",
  handleWidth: "handleWidth",
  handleLeft: "handleLeft",
  handleTop: "handleTop",
  checkedLeft: "checkedLeft",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
