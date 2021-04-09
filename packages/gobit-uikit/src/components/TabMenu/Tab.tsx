/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:12:01
 * @modify date 2021-04-09 14:12:01
 * @desc [description]
 */
import React from "react";
import StyledTab from "./StyledTab";
import { TabProps } from "./types";
import { Text } from "../Text";

const Tab: React.FC<TabProps> = ({ isActive = false, onClick, children }) => {
  return (
    <StyledTab onClick={onClick} bgColor={isActive ? "textSubtle" : "input"} color={isActive ? "card" : "textSubtle"}>
      <Text fontWeight={600} color={isActive ? "card" : "textSubtle"}>
        {children}
      </Text>
    </StyledTab>
  );
};
export default Tab;
