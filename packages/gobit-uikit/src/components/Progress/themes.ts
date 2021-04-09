/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:41:23
 * @modify date 2021-04-09 13:41:23
 * @desc [description]
 */
import { variants } from "./types";

export const styleVariants = {
  [variants.ROUND]: {
    borderRadius: "32px",
  },
  [variants.FLAT]: {
    borderRadius: 0,
  },
};

export default styleVariants;
