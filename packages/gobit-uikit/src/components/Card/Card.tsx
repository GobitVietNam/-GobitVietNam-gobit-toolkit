/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:36:58
 * @modify date 2021-04-09 13:36:58
 * @desc [description]
 */
import React from "react";
import StyledCard from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {ribbon}
      {children}
    </StyledCard>
  );
};
export default Card;
