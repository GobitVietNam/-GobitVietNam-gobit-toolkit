/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:38:44
 * @modify date 2021-04-09 13:38:44
 * @desc [description]
 */
export type Position = "top" | "top-right" | "bottom";

export interface PositionProps {
  position?: Position;
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
}
