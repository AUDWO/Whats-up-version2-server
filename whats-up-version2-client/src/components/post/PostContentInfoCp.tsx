import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2Cp";
import { GetPostAllowContact, GetPostContactCount } from "@/types/contentTypes";
import { GetContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import { useNavigate } from "react-router-dom";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
//import handleLinkToProfilePage from "@/utils/post/handleLinkToProfilePage";

interface Props {
  img: string;
  mainContent: string;
  contactCountInfo: GetPostContactCount;
  allowContactInfo: GetPostAllowContact;
  userInfo: GetContentUserInfo;
}
const PostContentInfoCp = ({
  img,
  mainContent,
  userInfo,
  allowContactInfo,
  contactCountInfo,
}: Props) => {
  const navigate = useNavigate();
  const { data: myInfo, isLoading } = myInfoQuery();

  //const handle

  const handleLinkToProfilePage = (userId: number) => {
    const isMyPost = myInfo?.id === userId && myInfo?.loginCheck && !isLoading;
    if (isMyPost) {
      navigate(`/profile/my`);
    } else {
      navigate(`/profile/other/${userId}`);
    }
  };

  return (
    <PostContentInfoContainer>
      <PostProfileWrapper>
        {userInfo.img ? (
          <PostProfileImg
            src={userInfo.img}
            onClick={() => {
              handleLinkToProfilePage(userInfo.id);
            }}
          />
        ) : (
          <PostBasicProfileImg
            onClick={() => handleLinkToProfilePage(userInfo.id)}
          >
            <BasicProfileImgCp width="38px" padding="5px" />
          </PostBasicProfileImg>
        )}
        <PostProfileName onClick={() => handleLinkToProfilePage(userInfo.id)}>
          {userInfo.nickname}
        </PostProfileName>
      </PostProfileWrapper>
      <PostImg src={img} />
      <PostContactV2Cp
        allowContactInfo={allowContactInfo}
        contactCountInfo={contactCountInfo}
      />
      <PostContentWrapper>
        <PostContent>
          <PostContentProfileName>{userInfo.nickname}</PostContentProfileName>
          {mainContent}
        </PostContent>
      </PostContentWrapper>
    </PostContentInfoContainer>
  );
};

export default PostContentInfoCp;

const PostProfileWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 4%;
  left: 4%;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PostProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const PostBasicProfileImg = styled.div`
  border: 3px solid ${(props) => props.theme.color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.color.main};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  cursor: pointer;
`;

const PostProfileName = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 6px 10px 6px 10px;
  background-color: white;
  border-radius: 14px;
  margin-left: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border: 3px solid ${(props) => props.theme.color.main};
  cursor: pointer;
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  @media screen and (max-width: 421px) {
    padding-bottom: 166.1%;
    width: 100%;
  }
`;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px;
  background-color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  object-fit: cover;
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 81%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const PostContentWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;

  background-color: ${(props) => props.theme.backColor};

  display: flex;
  algin-items: center;
  padding-top: 15px;

  @media screen and (max-width: 501px) {
    width: 420px;
    border-top: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PostContentProfileName = styled.span`
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const PostContent = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  line-height: 140%;
  @media screen and (max-width: 501px) {
    margin-left: 15px;
  }
`;
