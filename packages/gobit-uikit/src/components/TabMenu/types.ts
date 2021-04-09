/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:12:08
 * @modify date 2021-04-09 14:12:08
 * @desc [description]
 */
export interface TabMenuProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  children: React.ReactElement[];
}
export interface TabProps {
  isActive?: boolean;
  onClick?: () => void;
}
