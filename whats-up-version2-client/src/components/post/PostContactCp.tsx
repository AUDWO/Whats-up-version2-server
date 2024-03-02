import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";

import useModal from "@/customHooks/useModal";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { PostContactCount, PostContactAllow } from "@/types/contentTypes";
import morePostMdIdAtom from "@/store/getContentState/morePostMdIdState";

interface Props {
  contactCountInfo: PostContactCount;
  contactAllowInfo: PostContactAllow;
}

const PostContactCp = ({ contactCountInfo, contactAllowInfo }: Props) => {
  const { onOpen } = useModal("postCommentMd");

  const setMorePostMdIdState = useSetRecoilState(morePostMdIdAtom);

  const [likeClick, setLikeClick] = useState(false);
  return (
    <PostContactContainer>
      <PostContactWrapper>
        {likeClick && contactAllowInfo.allowLike ? (
          <PostFillLikeIcon onClick={() => setLikeClick(false)} />
        ) : (
          <PostLikeIcon onClick={() => setLikeClick(true)} />
        )}
        {contactAllowInfo.allowLike && <PostLikeIcon />}
        <PostContactCountNumber>
          {contactCountInfo.likeCount}
        </PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper
        onClick={() => {
          setMorePostMdIdState(contactAllowInfo.postId);
          onOpen();
        }}
      >
        {contactAllowInfo.allowComment ? (
          <PostCommentIcon />
        ) : (
          <PostCommentIcon />
        )}
        <PostContactCountNumber>
          {contactCountInfo.commentCount}
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
