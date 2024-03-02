import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2Cp";
import { PostContactAllow, PostContactCount } from "@/types/contentTypes";
import { ContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";

interface Props {
  img: string;
  mainContent: string;
  contactCountInfo: PostContactCount;
  contactAllowInfo: PostContactAllow;
  userInfo: ContentUserInfo;
}
const PostContentInfoCp = ({
  img,
  mainContent,
  userInfo,
  contactAllowInfo,
  contactCountInfo,
}: Props) => {
  return (
    <PostContentInfoContainer>
      <PostProfileWrapper>
        {userInfo.img ? (
          <PostProfileImg src={userInfo.img} />
        ) : (
          <BasicProfileImgCp width="35px" padding="5px" />
        )}
        <PostProfileName>{userInfo.nickname}</PostProfileName>
      </PostProfileWrapper>
      <PostImg src={img} />
      <PostContactV2Cp
        contactAllowInfo={contactAllowInfo}
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
`;

const PostProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const PostProfileName = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 3px 6px 3px 6px;
  background-color: white;
  border-radius: 5px;
  margin-left: 10px;
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    position: relative;
    padding-bottom: 166.1%;
  }
`;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px;
  background-color: black;
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
`;
