import { getCommentLikeCount } from "@/apis/comment/getApis";
import { getPostLikeInfo } from "@/apis/postApis/getApis";
import toggleState from "@/store/toggleState";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface Props {
  likeCount: number;
  commentId: number;
}
const CommentContactCp = ({ commentId, likeCount: preLikeCount }: Props) => {
  const { data: likeInfo, isLoading } = useQuery({
    queryKey: [`comment-like-count-${commentId}`],
    queryFn: () => getCommentLikeCount(commentId, "post"),
  });

  const [replyComInputOpen, setReplyComInputOpen] = useRecoilState(
    toggleState(`replyComInputOpen-${commentId}`)
  );

  const likeCountData = likeInfo?.likeCount || preLikeCount;

  return (
    <CommentContactWrapper>
      <CommentLikeText>좋아요</CommentLikeText>
      <CommentLikeCountNumber>{likeCountData}</CommentLikeCountNumber>
      {replyComInputOpen ? (
        <ReplyCommentInputOpenButton
          onClick={() => setReplyComInputOpen(false)}
        >
          취소
        </ReplyCommentInputOpenButton>
      ) : (
        <ReplyCommentInputOpenButton onClick={() => setReplyComInputOpen(true)}>
          답글 달기
        </ReplyCommentInputOpenButton>
      )}
    </CommentContactWrapper>
  );
};

export default CommentContactCp;

const CommentContactWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const CommentLikeText = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 2px;
`;

const CommentLikeCountNumber = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 20px;
`;

const ReplyCommentInputOpenButton = styled.button`
  font-size: 13px;
  color: #a4a4a4;
  border: none;
  background: none;
  cursor: pointer;
`;
