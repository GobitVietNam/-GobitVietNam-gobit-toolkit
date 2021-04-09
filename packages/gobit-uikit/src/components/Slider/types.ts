/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:42:35
 * @modify date 2021-04-09 13:42:35
 * @desc [description]
 */
import { BoxProps } from "../Box/types";

export default interface SliderProps extends BoxProps {
  name: string;
  min: number;
  max: number;
  value: number;
  step?: number | "any";
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  disabled?: boolean;
}
