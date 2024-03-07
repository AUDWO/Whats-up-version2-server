import { getComments, getPostComments } from "@/apis/comment/getApis";
import CommentRCp from "@components/common/comment/CommentRCp";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
interface Props {
  postId: number;
}
const MorePostCommentsCp = ({ postId }: Props) => {
  const { data: postComments, isLoading } = useQuery({
    queryKey: [`postComments-${postId}`],
    queryFn: () => getComments(postId, "post"),
  });

  if (isLoading) {
    return <div>안녕</div>;
  }

  return (
    <MorePostCommentsContainer>
      {postComments!.map((comment) => (
        <CommentRCp
          contentType="post"
          commentInfo={comment}
          contentId={postId}
        />
      ))}

      {postComments!.length === 0 && (
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
  height: 440px;
  ::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
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
