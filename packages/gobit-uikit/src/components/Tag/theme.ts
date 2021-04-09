/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:12:44
 * @modify date 2021-04-09 14:12:44
 * @desc [description]
 */
import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "28px",
    padding: "0 8px",
    fontSize: "14px",
  },
  [scales.SM]: {
    height: "24px",
    padding: "0 4px",
    fontSize: "12px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
  },
  [variants.SECONDARY]: {
    backgroundColor: "secondary",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
  },
  [variants.TEXTDISABLED]: {
    backgroundColor: "textDisabled",
  },
  [variants.TEXTSUBTLE]: {
    backgroundColor: "textSubtle",
  },
  [variants.BINANCE]: {
    backgroundColor: "binance",
  },
  [variants.FAILURE]: {
    backgroundColor: "failure",
  },
};
