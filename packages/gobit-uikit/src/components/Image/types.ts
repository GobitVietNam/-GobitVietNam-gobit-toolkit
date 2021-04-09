/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:39:38
 * @modify date 2021-04-09 13:39:38
 * @desc [description]
 */
import { SpaceProps } from "styled-system";

export interface ContainerProps {
  width: number;
  height: number;
  responsive?: boolean;
}

export interface ImageProps extends ContainerProps, SpaceProps {
  src: string;
  alt?: string;
}
