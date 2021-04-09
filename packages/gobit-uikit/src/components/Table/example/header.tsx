/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:11:08
 * @modify date 2021-04-09 14:11:08
 * @desc [description]
 */
import styled from "styled-components";

const StyledTh = styled.th`
  background: #eff4f5;
  padding: 8px;
  font-size: 12px;
  color: #8f80ba;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-right: 16px;
  }
`;

export default StyledTh;
