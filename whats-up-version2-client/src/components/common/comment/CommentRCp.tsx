import styled from "styled-components";
import CommentProfileCp from "./CommentProfileCp";
import CommentContentContactCp from "./CommentContentContactCp";
import CommentLikeCp from "./CommentLikeCp";

import { useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import ReplyCommentsRCp from "./replyComment/ReplyCommentsRCp";
import { GetCommentForm } from "@/types/commentTypes";

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
    hasReplyComments,
    likeInfo,
  } = commentInfo;

  const { nickname, img } = User;
  const { likeCount, likeStatus } = likeInfo;
  const replyCommentsOpen = useRecoilValue(
    toggleState(`replyComments-${contentType}-${commentId}`)
  );

  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentProfileCp img={img} />
        <CommentContentContactCp
          contentId={contentId}
          commentId={commentId}
          nickname={nickname}
          content={content}
          hasReplyComments={hasReplyComments}
          likeCount={likeCount}
          contentType={contentType}
        />
        <CommentLikeCp
          commentId={commentId}
          likeStatus={likeStatus}
          contentType={contentType}
        />
      </CommentWrapper>
      {replyCommentsOpen && (
        <ReplyCommentsRCp contentType={contentType} commentId={commentId} />
      )}
    </CommentContainer>
  );
};

export default CommentRCp;

const CommentContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
`;

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;
