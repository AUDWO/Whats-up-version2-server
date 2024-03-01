import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";
import useModal from "@/customHooks/useModal";
import { useState } from "react";
import { PostContact } from "@/types/contentTypes";
interface Props {
  contactInfo: PostContact;
}
const PostContactV2Cp = ({ contactInfo }: Props) => {
  const { onOpen } = useModal("postCommentMd");
  const [likeClick, setLikeClick] = useState(false);
  return (
    <PostContactInfoContainerV2>
      <PostContactWrapper>
        {likeClick && contactInfo.allowLike ? (
          <PostFillLikeIcon onClick={() => setLikeClick(false)} />
        ) : (
          <PostLikeIcon onClick={() => setLikeClick(true)} />
        )}
        {contactInfo.allowLike && <PostLikeIcon />}
        <PostContactCountNumber>{contactInfo.likeCount}</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper>
        {contactInfo.allowComment ? (
          <PostCommentIcon onClick={onOpen} />
        ) : (
          <PostCommentIcon />
        )}
        <PostContactCountNumber>
          {contactInfo.commentCount}
        </PostContactCountNumber>
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
  cursor: pointer;
  @media screen and (max-width: 501px) {
    margin-top: 0;
    margin-right: 10px;
  }
`;
