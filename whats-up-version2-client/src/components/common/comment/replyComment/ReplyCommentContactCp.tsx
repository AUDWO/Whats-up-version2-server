import { getCommentLikeCount } from "@/apis/comment/getApis";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
interface Props {
  likeCount: number;
  commentId: number;
  contentType: string;
}
const ReplyCommentContactCp = ({
  commentId,
  likeCount: preLikeCount,
  contentType,
}: Props) => {
  const { data: likeInfo, isLoading } = useQuery({
    queryKey: [`comment-like-count-${commentId}`],
    queryFn: () => getCommentLikeCount(commentId, contentType),
  });

  const likeCountData = likeInfo?.likeCount || preLikeCount;

  return (
    <CommentContactWrapper>
      <CommentLikeText>좋아요</CommentLikeText>
      <CommentLikeCountNumber>{likeCountData}</CommentLikeCountNumber>
    </CommentContactWrapper>
  );
};

export default ReplyCommentContactCp;

const CommentContactWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const CommentLikeText = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 2px;
`;

const CommentLikeCountNumber = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 20px;
`;

const ReplyCommentInputOpenButton = styled.button`
  font-size: 13px;
  color: #a4a4a4;
  border: none;
  background: none;
  cursor: pointer;
`;
