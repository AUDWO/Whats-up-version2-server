import styled from "styled-components";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postComment } from "@/apis/comment/postApis";
import resizeTextareaHeight from "@/utils/resizeTextareaHeight";
interface Props {
  postId: number;
}

const MorePostCommentInputCp = ({ postId }: Props) => {
  const [content, setContent] = useState("");

  const textarea = useRef<HTMLTextAreaElement>(null);

  const { mutate: createComment } = useCustomMutation(postComment, [
    `postComment-${postId}`,
  ]);

  const handlePostComment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createComment({
      content: content,
      contentType: "postComment",
      contentId: postId,
    });
  };

  return (
    <CommentInputContainer>
      <CommentTextarea
        ref={textarea}
        onChange={(e) =>
          resizeTextareaHeight(
            e,
            textarea as MutableRefObject<HTMLTextAreaElement>,
            () => setContent(e.target.value)
          )
        }
        placeholder="댓글을 입력해주세요!"
        value={content}
      />
      <CommentInputButton onClick={handlePostComment}>게시</CommentInputButton>
    </CommentInputContainer>
  );
};

export default MorePostCommentInputCp;

const CommentInputContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  min-height: 50px;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  align-items: center;
  padding-top: 10px;
  background-color: ${(props) => props.theme.bgColor};
`;

const CommentInputButton = styled.button`
  background-color: white;
  border: none;
  color: #4199ff;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
`;

const CommentTextarea = styled.textarea`
  width: 83%;
  outline: none;
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  padding-left: 20px;
  resize: none;
  &::placeholder {
    color: "#707070";
  }
`;
