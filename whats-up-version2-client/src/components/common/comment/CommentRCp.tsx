import styled from "styled-components";
import CommentProfileCp from "./CommentProfileCp";
import CommentContentCp from "./CommentContentCp";
import CommentLikeCp from "./CommentLikeCp";

import { GetCommentForm } from "@/types/commentTypes";
import CommentContactCp from "./CommentContactCp";

import ReplyCommentContactCp from "./ReplyCommentContactCp";

interface Props {
  contentType: string;
  commentInfo: GetCommentForm;
  contentId: number;
}
const CommentRCp = ({ contentType, commentInfo, contentId }: Props) => {
  const {
    User,
    id: commentId,
    content,
    hasReplyComments: preHasReplyCom,
    likeInfo,
  } = commentInfo;

  const { nickname, img } = User;
  const { likeCount, likeStatus } = likeInfo;

  console.log(commentInfo, commentId, "commentID");

  return (
    <CommentContainer>
      <CommentProfileCp img={img} />
      <CommentInfoWrapper>
        <CommentWrapper>
          <CommentContentCp nickname={nickname} content={content} />
          <CommentLikeCp
            commentId={commentId}
            likeStatus={likeStatus}
            contentType={contentType}
          />
        </CommentWrapper>
        <CommentContactCp
          likeCount={likeCount}
          commentId={commentId}
          contentType={contentType}
        />
        <ReplyCommentContactCp
          contentType={contentType}
          commentId={commentId}
          hasReplyComment={preHasReplyCom}
          contentId={contentId}
        />
      </CommentInfoWrapper>
    </CommentContainer>
  );
};

export default CommentRCp;

const CommentContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

const CommentInfoWrapper = styled.div`
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  align-items: center;
`;

const CommentA = styled.div`
  border: 1px solid black;
`;
