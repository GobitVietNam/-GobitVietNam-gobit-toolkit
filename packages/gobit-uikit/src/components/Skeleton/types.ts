/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:42:03
 * @modify date 2021-04-09 13:42:03
 * @desc [description]
 */
import { LayoutProps, SpaceProps } from "styled-system";

export const animation = {
  WAVES: "waves",
  PULSE: "pulse",
} as const;

export const variant = {
  RECT: "rect",
  CIRCLE: "circle",
} as const;

export type Animation = typeof animation[keyof typeof animation];
export type Variant = typeof variant[keyof typeof variant];

export interface SkeletonProps extends SpaceProps, LayoutProps {
  animation?: Animation;
  variant?: Variant;
}
