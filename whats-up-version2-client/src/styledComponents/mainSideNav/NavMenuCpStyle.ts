import styled, { css } from "styled-components";

const mainSideNavMenuMiniVersion1330 = `@media screen and (max-width:1330px)`;
const mainNavMenuDownVersion830 = `@media screen and (max-width:830px)`;

const navMenuListMiniVersion = css`
  margin: 0;
`;

const sideNavWrapperMiniVersion = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const navMenuTitleMiniVersion = css`
  display: none;
`;

export const MainSideNavMenuList = styled.div<{ searchMdOpen: boolean }>`
  width: 80%;
  margin-top: 50px;
  margin-left: 50px;
  background-color: ${(props) => props.theme.bgColor};
  ${mainSideNavMenuMiniVersion1330} {
    ${navMenuListMiniVersion}
  }
  ${mainNavMenuDownVersion830} {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  ${(props) => props.searchMdOpen && navMenuListMiniVersion};
`;

export const MainSideNavMenuContainer = styled.div<{
  position?: string;
  searchMdOpen: boolean;
}>`
  position: ${(props) => (props.position ? props.position : "")};
  position: relative;
  margin-top: 30px;
  width: 180px;
  ${(props) => props.searchMdOpen && sideNavWrapperMiniVersion};
  ${mainSideNavMenuMiniVersion1330} {
    ${sideNavWrapperMiniVersion}
  }
  ${mainNavMenuDownVersion830} {
    margin: 0;
  }
`;

export const MainSideNavMenuWrapper = styled.div<{
  position?: string;
  searchMdOpen: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 180px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 12px;
  }
  ${(props) => props.searchMdOpen && sideNavWrapperMiniVersion};
  ${mainSideNavMenuMiniVersion1330} {
    ${sideNavWrapperMiniVersion}
  }
`;

/*
export const MainSideNavMenuWrapper = styled.div<{
  position?: string;
  searchMdOpen: boolean;
}>`
  position: ${(props) => (props.position ? props.position : "")};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 180px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 12px;
  }
  ${(props) => props.searchMdOpen && sideNavWrapperMiniVersion};
  ${mainSideNavMenuMiniVersion1200} {
    ${sideNavWrapperMiniVersion}
  }
  ${mainNavMenuDownVersion705} {
    margin: 0;
  }
`;*/

export const MainSideNavMenuTitle = styled.div<{ searchMdOpen: boolean }>`
  margin-left: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  ${(props) => props.searchMdOpen && navMenuTitleMiniVersion};
  ${mainSideNavMenuMiniVersion1330} {
    ${navMenuTitleMiniVersion}
  }
`;
