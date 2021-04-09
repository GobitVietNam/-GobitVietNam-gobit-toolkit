/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:41:48
 * @modify date 2021-04-09 13:41:48
 * @desc [description]
 */
import { SpaceProps } from "styled-system";

export type RadioTheme = {
  handleBackground: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface RadioProps extends SpaceProps {
  scale?: Scales;
}
