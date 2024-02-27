import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
} from "@components/icons/PostContactIcons";

const PostContactV2Cp = () => {
  return (
    <PostContactInfoContainerV2>
      <PostContactWrapper>
        <PostLikeIcon />
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper>
        <PostCommentIcon />
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
    </PostContactInfoContainerV2>
  );
};

export default PostContactV2Cp;

const PostContactInfoContainerV2 = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: none;
  @media screen and (max-width: 501px) {
    display: flex;
    algin-items: center;
    width: 420px;
    border: 3px solid #f7dd07;
    border-bottom: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 9.5%;
    left: 0;
  }
`;
const PostContactCountNumber = styled.div`
  font-size: 14px;
`;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 10px;
  @media screen and (max-width: 501px) {
    margin-top: 0;
    margin-right: 10px;
  }
`;
