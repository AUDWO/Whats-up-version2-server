import styled from "styled-components";
import CommentProfileCp from "../CommentProfileCp";
import CommentContactCp from "../CommentContactCp";
import CommentLikeCp from "../CommentLikeCp";
import { ContentUserInfo } from "@/types/userTypes";
import { GetCommentForm } from "@/types/commentTypes";
interface Props {
  contentType: string;
  replyCommentInfo: GetCommentForm;
}
const ReplyCommentRCp = ({ contentType, replyCommentInfo }: Props) => {
  const { commentId, content, User } = replyCommentInfo;
  const { img, nickname } = User;

  return (
    <CommentContainer>
      <CommentProfileCp img={img} />
      <CommentContentContainer>
        <CommentProfileName>{nickname}</CommentProfileName>
        <CommentContent>{content}</CommentContent>
        <CommentContactCp commentId={commentId!} />
      </CommentContentContainer>
      <CommentLikeCp />
    </CommentContainer>
  );
};

export default ReplyCommentRCp;

const CommentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const CommentProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const CommentContentContainer = styled.div`
  min-height: 40px;
  margin-left: 10px;
  margin-top: 7px;
  width: 253px;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
