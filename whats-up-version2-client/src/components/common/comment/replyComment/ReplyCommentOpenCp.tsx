import styled from "styled-components";
import { ReplyCommentOpenIcon } from "@components/icons/ReplyCommentOpen";
import { useRecoilState } from "recoil";
import toggleState from "@/store/toggleState";
const ReplyCommentOpenCp = () => {
  const [replyCommentsOpen, setReplyCommentsOpen] = useRecoilState(
    toggleState("1")
  );

  return (
    <ReplyCommentOpenWrapper
      onClick={() => {
        setReplyCommentsOpen(!replyCommentsOpen);
      }}
    >
      <ReplyCommentOpenIcon />
      <ReplyCommentOpenButton>답글 보기</ReplyCommentOpenButton>
    </ReplyCommentOpenWrapper>
  );
};

export default ReplyCommentOpenCp;

const ReplyCommentOpenWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

const ReplyCommentOpenButton = styled.button`
  font-size: 14px;
  color: #a4a4a4;
  padding-top: 3px;
  background: none;
  border: none;
  cursor: pointer;
`;
