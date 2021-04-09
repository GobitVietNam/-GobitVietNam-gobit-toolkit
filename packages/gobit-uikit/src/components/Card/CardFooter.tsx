/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:37:06
 * @modify date 2021-04-09 13:37:06
 * @desc [description]
 */
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
