/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:40:05
 * @modify date 2021-04-09 13:40:05
 * @desc [description]
 */
import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
`;

export default GridLayout;
