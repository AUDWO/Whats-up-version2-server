import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2Cp";
const PostContentInfoCp = () => {
  return (
    <PostContentInfoContainer>
      <PostImg />
      <PostContactV2Cp />
      <PostContentWrapper>
        <PostContentProfileName>myeon+jae</PostContentProfileName>
        <PostContent>wd d wd d w w w </PostContent>
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
  height: 100%;
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
  height: 50px;

  background-color: ${(props) => props.theme.backColor};
  border: 3px solid #f7dd07;
  display: flex;
  algin-items: center;

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

const PostContentProfileName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;
  color: ${(props) => props.theme.fontColor};
`;
const PostContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;
