import styled from "styled-components";
import CommentRCp from "@components/common/comment/CommentRCp";
import { GetCommentForm } from "@/types/commentTypes";
interface Props {
  contentType: string;
  commentInfo: GetCommentForm;
}
const MoreCommentCp = ({ contentType, commentInfo }: Props) => {
  return (
    <MoreCommentContainer>
      <CommentRCp contentType={contentType} commentInfo={commentInfo} />
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
