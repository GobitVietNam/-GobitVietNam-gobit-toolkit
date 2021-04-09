/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:38:21
 * @modify date 2021-04-09 13:38:21
 * @desc [description]
 */
export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CheckboxProps {
  scale?: Scales;
}
