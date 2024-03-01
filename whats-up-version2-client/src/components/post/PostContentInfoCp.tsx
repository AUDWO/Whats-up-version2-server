import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2Cp";
import { PostContact } from "@/types/contentTypes";

interface Props {
  img: string;
  mainContent: string;
  nickname: string;
  contactInfo: PostContact;
}
const PostContentInfoCp = ({
  img,
  mainContent,
  nickname,
  contactInfo,
}: Props) => {
  return (
    <PostContentInfoContainer>
      <PostImg src={img} />
      <PostContactV2Cp contactInfo={contactInfo} />
      <PostContentWrapper>
        <PostContent>
          <PostContentProfileName>{nickname}</PostContentProfileName>
          {mainContent}
        </PostContent>
      </PostContentWrapper>
    </PostContentInfoContainer>
  );
};

export default PostContentInfoCp;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px 8px 0px 0px;
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

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    position: relative;
    padding-bottom: 166.1%;
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
