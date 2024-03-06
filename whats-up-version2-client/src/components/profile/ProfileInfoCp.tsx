import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";
import FollowInfoCountCp from "./FollowInfoCountCp";
import { GetUserForm } from "@/types/userTypes";
import { FaUser } from "react-icons/fa";
import outPutJoinedDate from "@/utils/outPutJoinedDate";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useModal from "@/customHooks/useModal";
//import BasicProfileImgCp from "./BasicProfileImgCp";
import renderText from "./util/renderText";
import checkContentPresence from "./util/checkContentPresence";

interface Props {
  userInfo: GetUserForm;
  otherUser?: boolean;
}

const ProfileInfoCp = ({ userInfo, otherUser = false }: Props) => {
  const { img, nickname, name, introduction, createdAt } = userInfo;

  const { onOpen: requestLoginMdOpen } = useModal("requestLoginMd");
  const { data: myInfo } = myInfoQuery();
  const notLoginUser = !myInfo?.loginCheck;

  return (
    <ProfileInfoContainer>
      <ProfileImgWrapper>
        {checkContentPresence(img) ? (
          <ProfileImg
            src={
              "https://i.pinimg.com/564x/93/b2/19/93b219cafc20b93743045ea518192238.jpg"
            }
          />
        ) : (
          <ProfilePageBasicProfileImg />
        )}
      </ProfileImgWrapper>
      <ProfileInfoWrapper>
        <ProfileInfoRealWrapper>
          <ProfileNameWrapper>
            <ProfileNickname>{nickname}</ProfileNickname>
            {otherUser && (
              <ButtonCp
                backColor={"#4199ff"}
                fontSize={"15px"}
                onClick={() => {
                  if (notLoginUser) {
                    requestLoginMdOpen();
                  }
                }}
              >
                팔로우
              </ButtonCp>
            )}
          </ProfileNameWrapper>
          <ProfileRealName exist={checkContentPresence(name)} other={otherUser}>
            {renderText(name, otherUser, "name")}
          </ProfileRealName>

          <ProfileIntroductionContainer>
            <ProfileIntroductionText
              exist={checkContentPresence(introduction)}
              other={otherUser}
            >
              {renderText(introduction, otherUser, "introduction")}
            </ProfileIntroductionText>
          </ProfileIntroductionContainer>
          <Joined>Joined {outPutJoinedDate(createdAt)}</Joined>
          <FollowInfoCountCp />
        </ProfileInfoRealWrapper>
      </ProfileInfoWrapper>
    </ProfileInfoContainer>
  );
};

export default ProfileInfoCp;

const BasicProfileImg = styled(FaUser)`
  box-sizing: border-box;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.subBgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
`;

const ProfileInfoContainer = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  background-color: ${(props) => props.theme.bgColor};
  padding-right: 60px;
  display: flex;
  @media screen and (max-width: 662px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const ProfileImgWrapper = styled.div`
  width: 170px;
  height: 170px;
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 662px) {
    width: 460px;
    margin-left: 0;
  }
  @media screen and (max-width: 464px) {
    height: 110px;
    width: 100%;
  }
`;

const ProfilePageBasicProfileImg = styled(BasicProfileImg)`
  width: 170px;
  height: 170px;
  padding: 15px;
  background-color: ${(props) => props.theme.borderColor};

  @media screen and (max-width: 662px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  @media screen and (max-width: 662px) {
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
  @media screen and (max-width: 662px) {
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

const ProfileNickname = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-right: 50px;
  color: ${(props) => props.theme.fontColor};
`;

const ProfileIntroductionContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProfileIntroductionText = styled.span<{ exist: boolean; other: boolean }>`
  line-height: 150%;
  font-weight: ${(props) => (props.exist ? "500" : "400")};
  color: ${(props) => (props.exist ? props.theme.fontColor : "gray")};
  ${(props) => !props.other && !props.exist && "border-bottom:1px solid gray"};
  cursor: ${(props) => !props.other && !props.exist && "pointer"};
  font-size: 14px;
`;

const ProfileRealName = styled.span<{ exist: boolean; other: boolean }>`
  font-weight: ${(props) => (props.exist ? "500" : "400")};
  margin-bottom: 20px;
  font-size: 16px;
  color: ${(props) => (props.exist ? props.theme.fontColor : "gray")};
  ${(props) => !props.other && !props.exist && "border-bottom:1px solid gray"};
  cursor: ${(props) => !props.other && !props.exist && "pointer"};
`;

const Joined = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColor};
`;
