/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:40:08
 * @modify date 2021-04-09 13:40:08
 * @desc [description]
 */
import styled from "styled-components";
import BaseLayout from "./BaseLayout";

const GridLayout = styled(BaseLayout)`
  & > div {
    grid-column: span 6;
    ${({ theme }) => theme.mediaQueries.sm} {
      grid-column: span 4;
    }
  }
`;

export default GridLayout;
