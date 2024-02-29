import styled from "styled-components";
import CommentProfileCp from "./CommentProfileCp";
import CommentContentContactCp from "./CommentContentContactCp";
import CommentLikeCp from "./CommentLikeCp";

import { useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import ReplyCommentsRCp from "./replyComment/ReplyCommentsRCp";
interface Props {
  contentType: string;
}
const CommentRCp = ({ contentType }: Props) => {
  const replyCommentsOpen = useRecoilValue(toggleState("1"));
  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentProfileCp />
        <CommentContentContactCp commentId={1} />
        <CommentLikeCp />
      </CommentWrapper>
      {replyCommentsOpen && <ReplyCommentsRCp contentType={contentType} />}
    </CommentContainer>
  );
};

export default CommentRCp;

const CommentContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const CommentWrapper = styled.div`
  display: flex;
`;
