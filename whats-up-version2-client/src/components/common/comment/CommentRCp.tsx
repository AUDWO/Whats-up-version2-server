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
}
const CommentRCp = ({ contentType, commentInfo }: Props) => {
  const { User, id: commentId, content } = commentInfo;
  const { nickname, img } = User;
  const replyCommentsOpen = useRecoilValue(
    toggleState(`replyComments-${commentId}`)
  );
  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentProfileCp img={img} />
        <CommentContentContactCp
          commentId={commentId}
          nickname={nickname}
          content={content}
        />
        <CommentLikeCp />
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
`;

const CommentWrapper = styled.div`
  display: flex;
`;
