/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:43:38
 * @modify date 2021-04-09 13:43:38
 * @desc [description]
 */
import { DefaultTheme } from "styled-components";

export interface ThemedProps {
  theme: DefaultTheme;
}

export type Status = "past" | "current" | "future";

export interface StatusProps extends ThemedProps {
  theme: DefaultTheme;
  status: Status;
}

export interface StepProps {
  index: number;
  status: Status;
  numberOfSteps?: number;
}
