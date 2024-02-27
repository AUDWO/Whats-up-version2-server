import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const ArrowDownIcon = styled(IoIosArrowDown)`
  color: ${(props) => (props.color ? props.color : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  cursor: pointer;
`;
