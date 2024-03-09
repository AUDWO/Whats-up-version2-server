import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";
import useModal from "@/customHooks/useModal";
import { useState } from "react";
import { GetPostAllowContact, GetPostContactCount } from "@/types/contentTypes";
import PostContactLikeCp from "./postContact/PostContactLikeCp";
import PostContactCommentCp from "./postContact/PostContactCommentCp";

interface Props {
  contactCountInfo: GetPostContactCount;
  allowContactInfo: GetPostAllowContact;
  postLiked: boolean;
  loginCheck: boolean;
  postId: number;
}

const PostContactV2Cp = ({
  allowContactInfo,
  contactCountInfo,
  postLiked: prePostLiked,
  loginCheck,
  postId,
}: Props) => {
  const { allowComment, allowLike } = allowContactInfo;
  const { commentCount: preCommentCount, likeCount: preLikeCount } =
    contactCountInfo;

  return (
    <PostContactInfoContainerV2>
      <PostContactLikeCp
        allowLike={allowLike}
        prePostLiked={prePostLiked}
        preLikeCount={preLikeCount}
        loginCheck={loginCheck}
        postId={postId}
      />

      <PostContactCommentCp
        allowComment={allowComment}
        postId={postId}
        preCommentCount={preCommentCount}
      />
    </PostContactInfoContainerV2>
  );
};

/*
 <PostContactWrapper>
        {likeClick && allowLike ? (
          <PostFillLikeIcon onClick={() => setLikeClick(false)} />
        ) : (
          <PostLikeIcon onClick={() => setLikeClick(true)} />
        )}
        {allowLike && <PostLikeIcon />}
        <PostContactCountNumber>{likeCount}</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper>
        {allowComment ? (
          <PostCommentIcon onClick={onOpen} />
        ) : (
          <PostCommentIcon />
        )}
        <PostContactCountNumber>{commentCount}</PostContactCountNumber>
      </PostContactWrapper>







*/

export default PostContactV2Cp;

const PostContactInfoContainerV2 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  algin-items: center;
  width: 420px;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
