import styled from "styled-components";
import ReplyCommentRCp from "./ReplyCommentRCp";
const ReplyCommentsRCp = () => {
  return (
    <ReplyCommentsContainer>
      <ReplyCommentRCp />
      <ReplyCommentRCp />
      <ReplyCommentRCp />
      <ReplyCommentRCp />
    </ReplyCommentsContainer>
  );
};

export default ReplyCommentsRCp;

const ReplyCommentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-left: 50px;
`;
