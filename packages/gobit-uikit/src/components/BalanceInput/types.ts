/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:35:29
 * @modify date 2021-04-09 13:35:29
 * @desc [description]
 */
import { InputHTMLAttributes, ReactNode, ReactText } from "react";
import { BoxProps } from "../Box";

export interface BalanceInputProps extends BoxProps {
  value: ReactText;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  currencyValue?: ReactNode;
  placeholder?: string;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
  isWarning?: boolean;
}
