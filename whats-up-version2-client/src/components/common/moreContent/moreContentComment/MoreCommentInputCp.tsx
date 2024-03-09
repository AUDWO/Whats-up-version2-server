import styled from "styled-components";
import { useState } from "react";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postComment } from "@/apis/comment/postApis";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useModal from "@/customHooks/useModal";

interface Props {
  contentType: string;
  contentId: number;
}

const MoreCommentInputCp = ({ contentType, contentId }: Props) => {
  const [content, setContent] = useState("");

  const { data: myInfo } = myInfoQuery();

  const { onOpen } = useModal("requestLoginMd");

  const userNotLogin = !myInfo?.loginCheck;

  const atLeastContentLength = content.length > 0;

  const { mutate: createComment } = useCustomMutation(postComment, [
    `${contentType}Comments`,
  ]);

  const handlePostComment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (userNotLogin) {
      onOpen();
    } else {
      e.stopPropagation();
      createComment({
        content: content,
        contentType,
        contentId,
      });
      setContent("");
    }
  };

  return (
    <MoreCommentInputWrapper>
      <MoreCommentInput
        placeholder={
          userNotLogin ? "로그인 후 이용해주세요." : "댓글을 입력하세요."
        }
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <MoreCommentInputButton
        onClick={handlePostComment}
        canSubmit={atLeastContentLength}
      >
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

const MoreCommentInputButton = styled.button<{ canSubmit: boolean }>`
  width: 50px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  background-color: #e8e8e8;
  color: #4199ff;
  color: ${(props) => (props.canSubmit ? props.theme.color.sub : "#AED1FA")};
  font-weight: 600;
  background-color: ${(props) => props.theme.borderColor};
  background-color: #e8e8e8;
  cursor: pointer;
`;
