import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";
import PostCommentMd from "@/modals/MorePostMd";
import useModal from "@/customHooks/useModal";
import { useState } from "react";
const PostContactCp = () => {
  const { onOpen } = useModal("postCommentMd");
  const [likeClick, setLikeClick] = useState(false);
  return (
    <PostContactContainer>
      <PostContactWrapper>
        {likeClick ? (
          <PostFillLikeIcon onClick={() => setLikeClick(false)} />
        ) : (
          <PostLikeIcon onClick={() => setLikeClick(true)} />
        )}
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper onClick={onOpen}>
        <PostCommentIcon />
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
    </PostContactContainer>
  );
};

export default PostContactCp;

const PostContactContainer = styled.div`
  width: 70px;
  height: 100%;

  @media screen and (max-width: 501px) {
    display: none;
  }
`;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 501px) {
    margin-top: 0;
    margin-right: 10px;
  }
`;

const PostContactCountNumber = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;
