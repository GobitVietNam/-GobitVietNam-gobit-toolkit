/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:37:09
 * @modify date 2021-04-09 13:37:09
 * @desc [description]
 */
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { CardTheme } from "./types";

export interface CardHeaderProps extends SpaceProps {
  variant?: keyof CardTheme["cardHeaderBackground"];
}

const CardHeader = styled.div<CardHeaderProps>`
  background: ${({ theme, variant = "default" }) => theme.card.cardHeaderBackground[variant]};
  ${space}
`;

CardHeader.defaultProps = {
  p: "24px",
};

export default CardHeader;
