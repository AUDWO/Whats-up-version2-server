import styled from "styled-components";
import MainIcon from "@components/icons/MainIcon";
import NavTitleCp from "./NavTitleCp";
import NavMenuCp from "./NavMenuCp";
import SearchMd from "./SearchMd";
import { useRecoilValue } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";
import { MutableRefObject, forwardRef } from "react";

const MainSideNavCp = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const searchMdOpenState = useRecoilValue(dependedModalOpenState("searchMd"));

  console.log(ref, "MainSideNav REF ");
  return (
    <div>
      <SearchMd />
      <MainSideNavContainer OpenState={searchMdOpenState}>
        <MainSideNavContent>
          <MainIconWrapper>
            <MainIcon />
          </MainIconWrapper>
          <NavTitleCp />
          <NavMenuCp ref={ref} />
        </MainSideNavContent>
      </MainSideNavContainer>
    </div>
  );
});

export default MainSideNavCp;

const MainSideNavContainer = styled.nav<{ OpenState: boolean }>`
  display: flex;
  justify-content: flex-start;
  width: ${(props) => (props.OpenState ? "100px" : "270px")};
  height: 100vh;
  position: fixed;
  z-index: 99999;
  left: 0;
  background-color: ${(props) => props.theme.bgColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};
  @media screen and (max-width: 1330px) {
    width: 100px;
  }
  @media screen and (max-width: 1330px) {
    width: 100px;
  }

  @media screen and (max-width: 830px) {
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    width: 100vw;
    height: 50px;
    display: block;
  }
`;
const MainSideNavContent = styled.div`
  width: 270px;
  background-color: ${(props) => props.theme.bgColor};

  @media screen and (max-width: 1330px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0%;
    width: 100vw;
    height: 100%;
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const MainIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 1330px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
