import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";

import useModal from "@/customHooks/useModal";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import morePostMdIdAtom from "@/store/content/morePostMdIdState";
import { PostContact } from "@/types/contentTypes";

interface Props {
  contactInfo: PostContact;
}

const PostContactCp = ({ contactInfo }: Props) => {
  const { onOpen } = useModal("postCommentMd");

  const setMorePostMdIdState = useSetRecoilState(morePostMdIdAtom);

  const [likeClick, setLikeClick] = useState(false);
  return (
    <PostContactContainer>
      <PostContactWrapper>
        {likeClick && contactInfo.allowLike ? (
          <PostFillLikeIcon onClick={() => setLikeClick(false)} />
        ) : (
          <PostLikeIcon onClick={() => setLikeClick(true)} />
        )}
        {!contactInfo.allowLike && <PostLikeIcon />}
        <PostContactCountNumber>{contactInfo.likeCount}</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper
        onClick={() => {
          setMorePostMdIdState(contactInfo.postId);
          onOpen();
        }}
      >
        {contactInfo.allowComment ? <PostCommentIcon /> : <PostCommentIcon />}
        <PostContactCountNumber>
          {contactInfo.commentCount}
        </PostContactCountNumber>
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
