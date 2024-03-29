import styled from "styled-components";

import { CommentFillLikeIcon } from "@components/icons/CommentLikeIcon";
import { CommentLikeIcon } from "@components/icons/CommentLikeIcon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postCommentLike } from "@/apis/comment/postApis";
import { getPostCommentCountInfo } from "@/apis/postApis/getApis";
import { getCommentLikeStatus } from "@/apis/comment/getApis";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useModal from "@/customHooks/useModal";

interface Props {
  commentId: number;
  likeStatus: boolean;
  contentType: string;
}

const CommentLikeCp = ({
  commentId,
  likeStatus: preLikeStatus,
  contentType,
}: Props) => {
  const queryClient = useQueryClient();
  const { data: myInfo } = myInfoQuery();
  const { onOpen } = useModal("requestLoginMd");
  const { onClose } = useModal("postCommentMd");

  const { data: likeInfo, isLoading } = useQuery({
    queryKey: [`comment-like-status-${commentId}`],
    queryFn: () => getCommentLikeStatus(commentId, contentType),
  });

  const { mutate: handlePostLike } = useMutation({
    mutationFn: postCommentLike,
    onSuccess: (data) => {
      console.log("aaaa");
      queryClient.invalidateQueries({
        queryKey: [`comment-like-count-${commentId}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`comment-like-status-${commentId}`],
      });
    },
  });
  if (isLoading) {
  }
  if (likeInfo) {
    console.log(likeInfo, commentId, "commentId", "likeInfo likeInfo LATEST");
  }

  const likeStatusData = likeInfo?.likeStatus || preLikeStatus;

  const userNotLogin = !myInfo?.loginCheck;

  return (
    <CommnetLikeIconWrapper>
      {likeStatusData ? (
        <CommentFillLikeIcon
          onClick={() => {
            handlePostLike({ contentType, commentId, likeAction: "unLike" });
          }}
        />
      ) : (
        <CommentLikeIcon
          onClick={() => {
            if (userNotLogin) {
              onClose();
              onOpen();
            } else {
              handlePostLike({ contentType, commentId, likeAction: "like" });
            }
          }}
        />
      )}
    </CommnetLikeIconWrapper>
  );
};

export default CommentLikeCp;

const CommnetLikeIconWrapper = styled.div`
  padding-top: 5px;
  margin-left: 10px;

  cursor: pointer;
`;
