/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:41:26
 * @modify date 2021-04-09 13:41:26
 * @desc [description]
 */
export const variants = {
  ROUND: "round",
  FLAT: "flat",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface ProgressProps {
  variant?: Variant;
  primaryStep?: number;
  secondaryStep?: number;
  showProgressBunny?: boolean;
}
