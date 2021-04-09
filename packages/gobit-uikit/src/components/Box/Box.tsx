/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:35:36
 * @modify date 2021-04-09 13:35:36
 * @desc [description]
 */
import styled from "styled-components";
import { background, border, layout, position, space } from "styled-system";
import { BoxProps } from "./types";

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
