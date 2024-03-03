import styled from "styled-components";
import CommentContactCp from "./CommentContactCp";
import ReplyCommentOpenCp from "./replyComment/ReplyCommentOpenCp";
import { useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import ReplyCommentInput from "./ReplyCommentInput";

interface Props {
  commentId: number;
  nickname: string;
  content: string;
  //ååcontentId: number;
}

const CommentContentContactCp = ({ commentId, nickname, content }: Props) => {
  const replyCommentInputOpen = useRecoilValue(
    toggleState(`replyCommentInputOpen-${commentId}`)
  );

  return (
    <CommentContentContainer>
      <CommentProfileName>{nickname}</CommentProfileName>
      <CommentContent>{content}</CommentContent>
      <CommentContactCp commentId={commentId} />
      {replyCommentInputOpen && (
        <ReplyCommentInput
          commentId={commentId}
          contentType="post"
          contentId={1}
        />
      )}
      <ReplyCommentOpenCp commentId={commentId} />
    </CommentContentContainer>
  );
};

export default CommentContentContactCp;

const C = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
  outline: none;
  height: 30px;
`;

const CommentProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const CommentContentContainer = styled.div`
  min-height: 40px;
  min-width: 300px;
  margin-left: 10px;
  margin-top: 7px;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
