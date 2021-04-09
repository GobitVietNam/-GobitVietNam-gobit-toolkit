/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:37:02
 * @modify date 2021-04-09 13:37:02
 * @desc [description]
 */
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
