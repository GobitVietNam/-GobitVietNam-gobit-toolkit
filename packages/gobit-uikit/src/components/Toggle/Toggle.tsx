/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:14:02
 * @modify date 2021-04-09 14:14:02
 * @desc [description]
 */
import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, scale = scales.MD, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} scale={scale}>
      <Input checked={checked} scale={scale} {...props} type="checkbox" />
      <Handle scale={scale} />
    </StyledToggle>
  );
};

Toggle.defaultProps = {
  scale: scales.MD,
};

export default Toggle;
