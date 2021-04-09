/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:40:00
 * @modify date 2021-04-09 13:40:00
 * @desc [description]
 */
import { SpaceProps } from "styled-system";

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface InputProps extends SpaceProps {
  scale?: Scales;
  isSuccess?: boolean;
  isWarning?: boolean;
}
