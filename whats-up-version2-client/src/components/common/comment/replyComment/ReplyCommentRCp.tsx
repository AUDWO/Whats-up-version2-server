import styled from "styled-components";
import CommentProfileCp from "../CommentProfileCp";
import CommentLikeCp from "../CommentLikeCp";
import { GetCommentForm } from "@/types/commentTypes";
import ReplyCommentContactCp from "./ReplyCommentContactCp";

interface Props {
  contentType: string;
  replyCommentInfo: GetCommentForm;
}
const ReplyCommentRCp = ({ contentType, replyCommentInfo }: Props) => {
  const { id: replyCommentId, content, User, likeInfo } = replyCommentInfo;
  const { likeCount, likeStatus } = likeInfo;
  const { img, nickname } = User;

  return (
    <CommentContainer>
      <CommentProfileCp img={img} />
      <CommentContentContainer>
        <CommentProfileName>{nickname}</CommentProfileName>
        <CommentContent>{content}</CommentContent>
        <ReplyCommentContactCp
          likeCount={likeCount}
          contentType={contentType}
          commentId={replyCommentId}
        />
      </CommentContentContainer>
      <CommentLikeCp
        likeStatus={likeStatus}
        commentId={replyCommentId!}
        contentType={contentType}
      />
    </CommentContainer>
  );
};

export default ReplyCommentRCp;

/*
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






*/
const CommentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding-top: 10px;
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
  width: 100%;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
