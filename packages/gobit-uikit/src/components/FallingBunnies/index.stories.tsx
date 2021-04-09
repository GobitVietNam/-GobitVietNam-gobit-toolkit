/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:38:53
 * @modify date 2021-04-09 13:38:53
 * @desc [description]
 */
import React from "react";
import FallingBunnies from "./FallingBunnies";

export default {
  title: "Components/FallingBunnies",
  component: FallingBunnies,
  argTypes: {},
};

export const Default: React.FC = () => {
  return <FallingBunnies />;
};
