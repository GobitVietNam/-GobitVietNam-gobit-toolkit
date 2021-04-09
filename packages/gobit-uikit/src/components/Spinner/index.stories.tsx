/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:42:40
 * @modify date 2021-04-09 13:42:40
 * @desc [description]
 */
import React from "react";
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {},
};

export const Default: React.FC = () => {
  return <Spinner size={50} />;
};
