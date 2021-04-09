/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:21:36
 * @modify date 2021-04-09 14:21:36
 * @desc [description]
 */
import { DefaultTheme } from "styled-components";
import getThemeValue from "./getThemeValue";

const getColor = (color: string, theme: DefaultTheme): string => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

export default getColor;
