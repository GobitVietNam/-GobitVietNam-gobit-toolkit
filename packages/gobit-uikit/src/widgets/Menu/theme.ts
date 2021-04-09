/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 15:02:30
 * @modify date 2021-04-09 15:02:30
 * @desc [description]
 */
import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.card,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.card,
  hover: "#473d5d",
};
