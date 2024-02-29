import styled from "styled-components";
import ReplyCommentRCp from "./ReplyCommentRCp";
interface Props {
  contentType: string;
}
const ReplyCommentsRCp = ({ contentType }: Props) => {
  return (
    <ReplyCommentsContainer>
      <ReplyCommentRCp contentType={contentType} />
      <ReplyCommentRCp contentType={contentType} />
      <ReplyCommentRCp contentType={contentType} />
      <ReplyCommentRCp contentType={contentType} />
    </ReplyCommentsContainer>
  );
};

export default ReplyCommentsRCp;

const ReplyCommentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-left: 50px;
`;
