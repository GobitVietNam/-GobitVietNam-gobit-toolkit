/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:13:54
 * @modify date 2021-04-09 14:13:54
 * @desc [description]
 */
import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.card,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.card,
};
