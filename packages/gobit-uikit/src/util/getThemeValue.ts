/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:21:47
 * @modify date 2021-04-09 14:21:47
 * @desc [description]
 */
import get from "lodash/get";
import { DefaultTheme } from "styled-components";

const getThemeValue = (path: string, fallback?: string | number) => (theme: DefaultTheme): string =>
  get(theme, path, fallback);

export default getThemeValue;
