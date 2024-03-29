import styled from "styled-components";
import { MutableRefObject, useRef, useState } from "react";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postComment } from "@/apis/comment/postApis";
import resizeTextareaHeight from "@/utils/resizeTextareaHeight";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useModal from "@/customHooks/useModal";
interface Props {
  postId: number;
}

const MorePostCommentInputCp = ({ postId }: Props) => {
  const [content, setContent] = useState("");
  const { data: myInfo } = myInfoQuery();
  const { onOpen } = useModal("requestLoginMd");

  const textarea = useRef<HTMLTextAreaElement>(null);

  const { mutate: createComment } = useCustomMutation(postComment, [
    `postCommentCount-${postId}`,
    `postComments-${postId}`,
  ]);

  const atLeastContentLength = () => content.length < 1;

  const handlePostComment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!myInfo?.loginCheck) {
      onOpen();
      return;
    }
    if (atLeastContentLength()) {
      alert("댓글을 입력해주세요!");
      return;
    }
    createComment({
      content: content,
      contentType: "postComment",
      contentId: postId,
    });
    setContent("");
  };

  return (
    <CommentInputContainer>
      <CommentTextarea
        ref={textarea}
        readOnly={!myInfo?.loginCheck}
        onChange={(e) =>
          resizeTextareaHeight(
            e,
            textarea as MutableRefObject<HTMLTextAreaElement>,
            () => setContent(e.target.value)
          )
        }
        placeholder={
          myInfo?.loginCheck
            ? "댓글을 입력해주세요."
            : "로그인 후 이용 가능합니다."
        }
        value={content}
      />
      <CommentPostButton
        canSubmit={!atLeastContentLength()}
        onClick={handlePostComment}
      >
        게시
      </CommentPostButton>
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
  border-top: 1px solid #363636;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  align-items: center;
  padding-top: 10px;
  background-color: ${(props) => props.theme.subBgColor};
`;

const CommentPostButton = styled.button<{ canSubmit: boolean }>`
  background-color: white;
  border: none;
  color: ${(props) => (props.canSubmit ? props.theme.color.sub : "#d2e6eb")};
  font-weight: 700;
  cursor: ${(props) => (props.canSubmit ? "pointer" : "")};
  background-color: ${(props) => props.theme.subBgColor};
  margin-bottom: 12px;
`;

const CommentTextarea = styled.textarea`
  width: 83%;
  outline: none;
  background-color: ${(props) => props.theme.subBgColor};
  border: none;
  padding-left: 20px;
  resize: none;
  &::placeholder {
    color: #a5a5a5;
  }
`;
