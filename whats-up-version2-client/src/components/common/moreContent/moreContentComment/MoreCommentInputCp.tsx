import styled from "styled-components";
import { useState } from "react";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postComment } from "@/apis/comment/postApis";

interface Props {
  contentType: string;
  contentId: number;
}

const MoreCommentInputCp = ({ contentType, contentId }: Props) => {
  const [content, setContent] = useState("");

  const { mutate: createComment } = useCustomMutation(postComment, ["more"]);

  const handlePostComment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createComment({
      content: content,
      contentType,
      contentId,
    });
  };

  return (
    <MoreCommentInputWrapper>
      <MoreCommentInput
        placeholder="댓글을 입력하세요."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <MoreCommentInputButton onClick={handlePostComment}>
        게시
      </MoreCommentInputButton>
    </MoreCommentInputWrapper>
  );
};

export default MoreCommentInputCp;

const MoreCommentInputWrapper = styled.div`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const MoreCommentInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: #e8e8e8;
  padding-left: 10px;
  border-radius: 8px 0px 0px 8px;
  background-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.fontColor};
  background-color: #e8e8e8;
`;

const MoreCommentInputButton = styled.button`
  width: 50px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  background-color: #e8e8e8;
  color: #4199ff;
  font-weight: 600;
  background-color: ${(props) => props.theme.borderColor};
  background-color: #e8e8e8;
`;
