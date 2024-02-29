import { getPostComments } from "@/apis/comment/getApis";
import CommentRCp from "@components/common/comment/CommentRCp";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
interface Props {
  postId: number;
}
const MorePostCommentsCp = ({ postId }: Props) => {
  const { data } = useQuery({
    queryKey: [`postComments-${postId}`],
    queryFn: () => getPostComments(postId),
  });
  return (
    <MorePostCommentsContainer>
      {data?.map((comment) => (
        <CommentRCp contentType="post" commentInfo={comment} />
      ))}

      {false && (
        <NoCommentWrapper>
          <NoCommentText>아직 댓글이 존재하지 않습니다.</NoCommentText>
        </NoCommentWrapper>
      )}
    </MorePostCommentsContainer>
  );
};

export default MorePostCommentsCp;

const MorePostCommentsContainer = styled.div`
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  overflow: auto;
  height: 360px;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${(props) => props.theme.subBgColor};
`;

const NoCommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoCommentText = styled.div``;
