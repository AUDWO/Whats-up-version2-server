import DiaryContentsRCp from "@components/diaryBlog/diaryContents/DiaryContentsRCp";
import DiaryFilterCp from "@components/diaryBlog/DiaryFilterCp";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";

import styled from "styled-components";
const DiaryBlogPage = () => {
  return (
    <Container>
      <MainSideNavCp />
      <MainContentsContainer>
        <DiaryFilterCp />
        <DiaryContentsRCp />
      </MainContentsContainer>
    </Container>
  );
};

export default DiaryBlogPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 40px;
  grid-gap: 30px;
  @media screen and (max-width: 1200px) {
  }
`;
