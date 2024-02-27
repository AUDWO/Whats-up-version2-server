import { MdSunny } from "react-icons/md";
import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";

export const SunIcon = styled(MdSunny)`
  color: RGB(238 53 53);
  font-size: 18px;
`;

export const MoonIcon = styled(IoMdMoon)`
  color: ${(props) => props.theme.color.main};
`;
