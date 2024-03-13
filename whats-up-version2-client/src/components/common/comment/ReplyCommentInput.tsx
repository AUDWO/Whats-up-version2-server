import { postReplyComment } from "@/apis/comment/postApis";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import onCheckHasReplyComments from "@/store/getCommentState/onCheckHasReplyComments";
import toggleState from "@/store/toggleState";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

interface Props {
  commentId: number;
  contentId: number;
  contentType: string;
}

const ReplyCommentInput = ({ commentId, contentType, contentId }: Props) => {
  const [content, setContent] = useState("");

  const { data: myInfo } = myInfoQuery();

  const setOnHasReplyComments = useSetRecoilState(
    onCheckHasReplyComments(`comment-${commentId}`)
  );

  const setReplyComInputOpen = useSetRecoilState(
    toggleState(`replyComInputOpen-${contentType}-${commentId}`)
  );

  const { mutate: createReplyComment } = useCustomMutation(postReplyComment, [
    `postCommentCount-${contentId}`,
  ]);

  const atLeastContentLength = () => content.length > 1;

  const setGetHasReplyInfoEnabledState = useSetRecoilState(
    toggleState(`getHasReplyInfoEnable-${contentType}-${commentId}`)
  );

  const handlePostReplyComment = () => {
    if (!atLeastContentLength()) {
      alert("댓글을 입력해주세요!");
      return;
    } else {
      createReplyComment({
        content: content,
        contentType,
        commentId,
        contentId,
      });
      setContent("");
      setOnHasReplyComments(true);
      setReplyComInputOpen(false);
      setGetHasReplyInfoEnabledState(true);
    }
  };

  return (
    <InputContainer>
      <ReplyCommentInputWrapper>
        <Input
          readOnly={!myInfo?.loginCheck}
          placeholder={
            myInfo?.loginCheck
              ? "답글을 입력해주세요."
              : "로그인 후 이용해주세요."
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          contentType={contentType}
        />
        <ReplyCommentPostButton
          canSubmit={atLeastContentLength()}
          onClick={handlePostReplyComment}
          contentType={contentType}
        >
          게시
        </ReplyCommentPostButton>
      </ReplyCommentInputWrapper>
    </InputContainer>
  );
};

export default ReplyCommentInput;

const InputContainer = styled.div`
  width: 100%;
  height: 32px;
  padding-left: 3px;
  border: 1px solid black;
`;

const ReplyCommentInputWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.replyInputBorderColor};
`;

const ReplyCommentPostButton = styled.div<{
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
  display: flex;
  justify-content: center;
  align-items: center;
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
