import styled from "styled-components";
import ReplyCommentRCp from "./ReplyCommentRCp";
import { useQuery } from "@tanstack/react-query";
import { getPostReplyComments } from "@/apis/comment/getApis";
interface Props {
  contentType: string;
  commentId: number;
}
const ReplyCommentsRCp = ({ contentType, commentId }: Props) => {
  const { data: replyComments, isLoading } = useQuery({
    queryKey: [`replyComments-${commentId}`],
    queryFn: () => getPostReplyComments(commentId),
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <ReplyCommentsContainer>
      {replyComments!.map((replyComment) => (
        <ReplyCommentRCp
          contentType={contentType}
          replyCommentInfo={replyComment}
        />
      ))}
    </ReplyCommentsContainer>
  );
};

export default ReplyCommentsRCp;

const ReplyCommentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-left: 50px;
`;
