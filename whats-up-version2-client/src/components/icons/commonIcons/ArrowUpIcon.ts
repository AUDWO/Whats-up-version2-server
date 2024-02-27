import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

export const ArrowUpIcon = styled(IoIosArrowUp)`
  color: ${(props) => (props.color ? props.color : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  cursor: pointer;
`;
