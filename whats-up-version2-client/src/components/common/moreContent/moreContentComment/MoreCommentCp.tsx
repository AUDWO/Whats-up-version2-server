import styled from "styled-components";
import CommentRCp from "@components/common/comment/CommentRCp";

const MoreCommentCp = () => {
  return (
    <MoreCommentContainer>
      <CommentRCp />
    </MoreCommentContainer>
  );
};

export default MoreCommentCp;

const MoreCommentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
