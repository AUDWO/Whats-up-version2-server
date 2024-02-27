import styled from "styled-components";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import SubSideNavRCp from "@components/subSideNav/SubSideNavRCp";
import StoryContentsRCp from "@components/homeStory/StoryContentsRCp";
import PostContentsRCp from "@components/post/PostContentsRCp";

import MainIcon from "@components/icons/MainIcon";
import "./HomePage.css";
import { useRecoilValue } from "recoil";
import viewPortFixedState from "@/store/viewPortFixedState";
import { MutableRefObject, useRef } from "react";
import useScrollTopRestore from "@/customHooks/useScrollTopRestore";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getAllStory } from "@/apis/storyApis/getApis";
import { getMyInfo } from "@/apis/userApis";

const HomePage = () => {
  const fixedState = useRecoilValue(viewPortFixedState);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useScrollTopRestore(
    "scrollTop",
    scrollContainerRef as MutableRefObject<HTMLDivElement>
  );
  /*
  const results = useQueries({
    queries: [
      { queryKey: ["allStory", 1], queryFn: getAllStory, staleTime: Infinity },
      { queryKey: ["post", 2], queryFn: getAllStory, staleTime: Infinity },
      { queryKey: ["myInfo"], queryFn: getMyInfo, staleTime: Infinity },
    ],
  });*/

  const { data: myInfo, isLoading } = useQuery({
    queryKey: ["my-info"],
    queryFn: getMyInfo,
  });
  if (myInfo) {
    console.log(myInfo, "myInfo myInfo myInfo");
  }

  if (isLoading) {
    return <div></div>;
  }

  if (myInfo) {
    return (
      <PageContainer>
        {/* HomePageHeader appears when viewport is less than 500px*/}
        <HomePageHeader>
          <HeaderIconWrapper>
            ㄴ
            <MainIcon />
          </HeaderIconWrapper>
          <HeaderTitle>WHAT'S UP</HeaderTitle>
        </HomePageHeader>
        <HomePageContainer viewPortFixed={fixedState}>
          <ScrollContentsContainer ref={scrollContainerRef}>
            <MainSideNavCp ref={scrollContainerRef} />
            <MainContentsContainer>
              <StoryContentsRCp />
              <PostContentsRCp />
            </MainContentsContainer>
            <SubSideNavRCp myInfo={myInfo} />
          </ScrollContentsContainer>
        </HomePageContainer>
      </PageContainer>
    );
  }
};

export default HomePage;

//
const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

//

//--------------homePage header

const HomePageHeader = styled.div`
  display: none;
  padding:10px; 20px;
  @media screen and (max-width: 500px) {
    display: flex;
    align-items:center;
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.bgColor};
  }
`;

//--------------homePage header
const PageContainer = styled.div<{
  viewPortFixed?: boolean;
  scrollTop?: number;
}>`
  height: 100vh;
  width: 100%;
`;

const HomePageContainer = styled.div<{
  viewPortFixed?: boolean;
  scrollTop?: number;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 1250px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 1019px) {
    justify-content: center;
  }

  @media screen and (max-width: 799px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 705px) {
    justify-content: center;
  }
`;

const HeaderIconWrapper = styled.div``;
const HeaderTitle = styled.div`
  font-family: Orbitron;
  font-size: 25px;
  color: #f7dd07;
  margin-left: 10px;
`;

const ScrollContentsContainer = styled.div`
  boxing-size: boder-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  position: relative;
  @media screen and (max-width: 1400px) {
    align-items: flex-end;
    padding-right: 320px;
  }

  @media screen and (max-width: 1160px) {
    padding-right: 0;
    padding-left: 100px;
    align-items: center;
  }
  @media screen and (max-width: 830px) {
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
