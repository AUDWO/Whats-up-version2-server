import ProfileContentsCp from "@components/profile/ProfileContentsCp";
import ProfileInfoCp from "@components/profile/ProfileInfoCp";
import ProfileContentsTypeCp from "@components/profile/ProfileContentsTypeCp";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <Container>
      <MainSideNavCp />
      <ContentsContainer>
        <MainContents>
          <ProfileInfoCp />
          <ProfileContentsTypeCp />
          <ProfileContentsCp />
        </MainContents>
      </ContentsContainer>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.bgColor};

  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 705px) {
    padding: 0;
  }
`;

const MainContents = styled.div`
  width: 935px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 50px;
  padding-top: 50px;
  @media screen and (max-width: 935px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;
