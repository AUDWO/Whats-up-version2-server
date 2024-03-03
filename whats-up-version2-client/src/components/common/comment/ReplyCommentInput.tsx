import { postReplyComment } from "@/apis/comment/postApis";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  commentId: number;
  contentId: number;
  contentType: string;
}

const ReplyCommentInput = ({ commentId, contentType, contentId }: Props) => {
  const [content, setContent] = useState("");

  const { data: myInfo } = myInfoQuery();

  const { mutate: createReplyComment } = useCustomMutation(postReplyComment);

  const handleCreateReplyComment = () => {
    createReplyComment({ content: content, contentType, commentId, contentId });
  };

  return (
    <InputContainer>
      <Input
        readOnly={!myInfo?.loginCheck}
        placeholder="답글을 입력해주세요!"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        contentType={contentType}
      />
      <ReplyCommentPostButton
        canSubmit={false}
        onClick={handleCreateReplyComment}
        contentType={contentType}
      >
        게시
      </ReplyCommentPostButton>
    </InputContainer>
  );
};

export default ReplyCommentInput;

const InputContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.replyInputBorderColor};
`;

const ReplyCommentPostButton = styled.button<{
  canSubmit: boolean;
  contentType: string;
}>`
  background-color: none;
  border: none;
  color: ${(props) => props.theme.color.sub};
  height: 30px;
  background-color: ${(props) =>
    props.contentType === "post" ? props.theme.subBgColor : "#f7f7f7"};
  color: ${(props) => (props.canSubmit ? props.theme.color.sub : "#d2e6eb")};
  cursor: ${(props) => (props.canSubmit ? "pointer" : "")};
  cursor: pointer;
  font-size: 12px;
  width: 50px;
`;

const Input = styled.input<{ contentType: string }>`
  border: none;
  width: 90%;
  outline: none;
  height: 29px;
  font-size: 12px;
  &::placeholder {
    color: #a5a5a5;
  }
  background-color: ${(props) =>
    props.contentType === "post" ? props.theme.subBgColor : "#f7f7f7"};
`;
