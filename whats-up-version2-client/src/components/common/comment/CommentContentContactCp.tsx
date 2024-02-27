import styled from "styled-components";
import CommentContactCp from "./CommentContactCp";
import ReplyCommentOpenCp from "./replyComment/ReplyCommentOpenCp";
import { useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import ReplyCommentInput from "./ReplyCommentInput";

interface Props {
  commentId: number;
}

const CommentContentContactCp = ({ commentId }: Props) => {
  const replyCommentInputOpen = useRecoilValue(
    toggleState(`replyCommentInputOpen-${commentId}`)
  );

  return (
    <CommentContentContainer>
      <CommentProfileName>liverpool</CommentProfileName>
      <CommentContent>
        어느날의 퇴근길 풍경입니다:) 며칠 전에 같이 퇴근을 하는데, 앞에 타고
        계시는 부장님과 동호PD가 사이가 너~무 좋은게 아니겠어요??!!!❤️
        엄마미소를 지으며 보다가 부랴부랴 사진으로 남겨 놓았는데 사진으로는
        즐거웠던 분위기가 전달이 안되는거 같네요;; 허허허허 그렇지만!!!! 퇴근길
        공유 해 봅니다. 월요일 오후시간, 퇴근 생각이 간절하실 우리 사원님들!!!!
        이번한주도 함께 화이팅해요!!!!!!!!!!☺️✨
      </CommentContent>
      <CommentContactCp commentId={commentId} />
      {replyCommentInputOpen && (
        <ReplyCommentInput commentId={1} contentType="post" contentId={1} />
      )}
      <ReplyCommentOpenCp />
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
  margin-left: 10px;
  margin-top: 7px;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
