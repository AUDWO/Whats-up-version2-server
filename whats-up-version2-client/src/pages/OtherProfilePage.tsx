import ProfileContentsCp from "@components/profile/ProfileContentsCp";
import ProfileInfoCp from "@components/profile/ProfileInfoCp";
import ProfileContentsTypeCp from "@components/profile/ProfileContentsTypeCp";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import styled from "styled-components";
import { GetUserForm } from "@/types/userTypes";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/apis/userApis";

const OtherProfilePage = () => {
  const { userId } = useParams();

  const otherUserId = Number(userId);

  const { data: otherUserInfo, isLoading } = useQuery({
    queryKey: [`userInfo-${otherUserId}`],
    queryFn: () => {
      return getUserInfo(otherUserId);
    },
  });
  if (isLoading) {
    return <div>안녕</div>;
  }
  return (
    <Container22>
      <MainSideNavCp />
      <ContentsContainer>
        <MainContents>
          <ProfileInfoCp userInfo={otherUserInfo as GetUserForm} />
          <ProfileContentsTypeCp
            contentInfo={(otherUserInfo as GetUserForm).contentInfo}
          />
          <ProfileContentsCp />
        </MainContents>
      </ContentsContainer>
    </Container22>
  );
};

export default OtherProfilePage;

const Container22 = styled.div`
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
  @media screen and (max-width: 830px) {
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
