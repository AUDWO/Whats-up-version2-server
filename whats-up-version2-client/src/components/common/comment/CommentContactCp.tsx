import toggleState from "@/store/toggleState";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface Props {
  commentId: number;
}

const CommentContactCp = ({ commentId }: Props) => {
  const [replyCommentInputOpen, setReplyCommentInputOpen] = useRecoilState(
    toggleState(`replyCommentInputOpen-${commentId}`)
  );
  return (
    <CommentContactWrapper>
      <CommentLikeText>좋아요</CommentLikeText>
      <CommentLikeCountNumber>18</CommentLikeCountNumber>
      {replyCommentInputOpen ? (
        <ReplyCommentInputOpenButton
          onClick={() => setReplyCommentInputOpen(false)}
        >
          취소
        </ReplyCommentInputOpenButton>
      ) : (
        <ReplyCommentInputOpenButton
          onClick={() => setReplyCommentInputOpen(true)}
        >
          {" "}
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
