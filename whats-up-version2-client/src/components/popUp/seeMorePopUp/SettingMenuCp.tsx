import React from "react";
import styled from "styled-components";

const SettingMenuCp = () => {
  return <div></div>;
};

export default SettingMenuCp;

const SeeMorePopUpContainer = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.subBgColor};
  position: absolute;
  right: 0%;
  top: -180px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 8px 0px;
  @media screen and (max-width: 1330px) {
    right: -150%;
  }
  @media screen and (max-width: 830px) {
    right: 10%;
  }
`;

const DarkModeSelectWrapper = styled.div<{ onBorder: boolean }>`
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  ${(props) =>
    props.onBorder && `border-bottom:1px solid ${props.theme.borderColor}`}
`;

const DarkModeSelectText = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    background-color: #f0f1f3;
  }
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding-left: 10px;
`;
