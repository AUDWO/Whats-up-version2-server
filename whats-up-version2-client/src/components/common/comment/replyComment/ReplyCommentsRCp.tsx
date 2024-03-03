import styled from "styled-components";
import ReplyCommentRCp from "./ReplyCommentRCp";
import { useQuery } from "@tanstack/react-query";
import { getReplyComments } from "@/apis/comment/getApis";
interface Props {
  contentType: string;
  commentId: number;
}
const ReplyCommentsRCp = ({ contentType, commentId }: Props) => {
  const { data: replyComments, isLoading } = useQuery({
    queryKey: [`${contentType}replyComments`],
    queryFn: () => getReplyComments(commentId, contentType),
  });
  if (isLoading) {
    return <Loading>안녕</Loading>;
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

const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
