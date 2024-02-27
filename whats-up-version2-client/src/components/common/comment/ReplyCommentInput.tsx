import { postComment, postReplyComment } from "@/apis/comment/postApis";
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

  const { mutate: createReplyComment } = useCustomMutation(postReplyComment);

  const handleCreateReplyComment = () => {
    createReplyComment({ content: content, contentType, commentId, contentId });
  };

  return (
    <InputContainer>
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <ReplyCommentPostButton onClick={handleCreateReplyComment}>
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
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const ReplyCommentPostButton = styled.button`
  background-color: none;
  border: none;
  color: ${(props) => props.theme.color.sub};
  height: 30px;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
  font-size: 12px;
  width:20%:
`;

const Input = styled.input`
  border: none;
  width: 80%;
  outline: none;
  height: 29px;
`;
