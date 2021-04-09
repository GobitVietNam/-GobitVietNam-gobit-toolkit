/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:38:13
 * @modify date 2021-04-09 13:38:13
 * @desc [description]
 */
import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Checkbox />
      </div>
      <div>
        <Checkbox scale="sm" />
      </div>
    </>
  );
};
