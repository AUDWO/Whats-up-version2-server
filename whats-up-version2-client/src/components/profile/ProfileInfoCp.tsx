import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";
import FollowInfoCountCp from "./FollowInfoCountCp";
import { GetUserForm } from "@/types/userTypes";
import { FaUser } from "react-icons/fa";
const BasicProfileImg = styled(FaUser)`
  box-sizing: border-box;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  color: ${(props) => props.theme.color.sub};
  background-color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.subBgColor};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

interface Props {
  userInfo: GetUserForm;
}

const ProfileInfoCp = ({ userInfo }: Props) => {
  return (
    <ProfileInfoContainer>
      <ProfileImgWrapper>
        {userInfo.img ? (
          <ProfileImg
            src={
              "https://i.pinimg.com/564x/93/b2/19/93b219cafc20b93743045ea518192238.jpg"
            }
          />
        ) : (
          <BasicProfileImg />
        )}
      </ProfileImgWrapper>
      <ProfileInfoWrapper>
        <ProfileInfoRealWrapper>
          <ProfileNameWrapper>
            <ProfileName>{userInfo.nickname}</ProfileName>
            <ButtonCp backColor={"#4199ff"} fontSize={"15px"}>
              팔로우
            </ButtonCp>
          </ProfileNameWrapper>
          <ProfileRealName>peter</ProfileRealName>
          <ProfileIntroductionContainer>
            <ProfileIntroductionText>
              Real Madrid.🤍 @AdidasFootball Athlete. Twitter: BellinghamJude
              Real Madrid.🤍 @AdidasFootball Athlete. Twitter: BellinghamJude
            </ProfileIntroductionText>
          </ProfileIntroductionContainer>
          <Joined>Joined 2022-09-19</Joined>
          <FollowInfoCountCp />
        </ProfileInfoRealWrapper>
      </ProfileInfoWrapper>
    </ProfileInfoContainer>
  );
};

export default ProfileInfoCp;

const ProfileInfoContainer = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  background-color: ${(props) => props.theme.bgColor};
  padding-right: 60px;
  display: flex;
  @media screen and (max-width: 846px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (max-width: 705px) {
  }
`;

const ProfileImgWrapper = styled.div`
  width: 170px;
  height: 170px;
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 846px) {
    width: 460px;
    margin-left: 0;
  }
  @media screen and (max-width: 464px) {
    height: 110px;
    width: 100%;
  }
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  @media screen and (max-width: 846px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileInfoWrapper = styled.div`
  width: 80%;
  height: 300px;
  padding-left: 80px;
  @media screen and (max-width: 846px) {
    width: 460px;
    padding: 0;
  }
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;
//--------------profileContent-----------------
const ProfileInfoRealWrapper = styled.div`
  width: 460px;
  height: 100%;
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-right: 50px;
  color: ${(props) => props.theme.fontColor};
`;

const ProfileIntroductionContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProfileIntroductionText = styled.div`
  line-height: 150%;
  color: ${(props) => props.theme.fontColor};
`;

const ProfileRealName = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 17px;
  color: ${(props) => props.theme.fontColor};
`;

const Joined = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColor};
`;
