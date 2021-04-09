/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 15:14:05
 * @modify date 2021-04-09 15:14:05
 * @desc [description]
 */
import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";

/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component: ReactNode, theme = light): RenderResult => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
