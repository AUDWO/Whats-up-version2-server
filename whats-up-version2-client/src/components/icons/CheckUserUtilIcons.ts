import styled from "styled-components";

//CheckUserIcon
import { IoSettingsOutline } from "react-icons/io5";
//Logout
import { IoLogOutOutline } from "react-icons/io5";

const CheckUserUtilIconsColor = "#bcb8b8";

export const LogoutIcon = styled(IoLogOutOutline)`
  color: ${CheckUserUtilIconsColor};
  margin-right: 5px;
`;

export const SettingIcon = styled(IoSettingsOutline)`
  color: ${CheckUserUtilIconsColor};
  margin-right: 5px;
`;
