/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:43:35
 * @modify date 2021-04-09 13:43:35
 * @desc [description]
 */
import React from "react";
import styled from "styled-components";
import { ThemedProps } from "./types";

const StepperWrapper = styled.div<ThemedProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const Stepper: React.FC = ({ children }) => {
  const numberOfSteps = React.Children.count(children);
  return (
    <StepperWrapper>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { numberOfSteps });
        }
        return child;
      })}
    </StepperWrapper>
  );
};

export default Stepper;
