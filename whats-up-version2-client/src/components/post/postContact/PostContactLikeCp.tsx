import styled from "styled-components";
import {
  PostLikeIcon,
  PostFillLikeIcon,
} from "@components/icons/PostContactIcons";
import useModal from "@/customHooks/useModal";
import { postLike } from "@/apis/postApis/postApis";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getPostLikeInfo } from "@/apis/postApis/getApis";

interface Props {
  allowLike: boolean;
  prePostLiked: boolean;
  preLikeCount: number;
  loginCheck: boolean;
  postId: number;
}

const PostContactLikeCp = ({
  allowLike,
  prePostLiked,
  preLikeCount,
  loginCheck,
  postId,
}: Props) => {
  const { onOpen: requestLoginMdOpen } = useModal("requestLoginMd");

  const queryClient = useQueryClient();

  const { data: likeInfo, isLoading: likeInfoLoading } = useQuery({
    queryKey: [`postLikeInfo-${postId}`, postId],
    queryFn: () => getPostLikeInfo(postId),
    enabled: loginCheck,
  });

  const { mutate: handlePostLike } = useMutation({
    mutationFn: postLike,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`postLikeInfo-${postId}`] });
    },
  });

  const likeCountData = likeInfo?.likeCount || preLikeCount;
  const likeStatusData = likeInfo?.likeStatus || prePostLiked;

  return (
    <PostContactWrapper>
      {allowLike ? (
        likeStatusData ? (
          <PostFillLikeIcon
            onClick={() => {
              if (!loginCheck) {
                requestLoginMdOpen();
              } else {
                handlePostLike({ postId, postLikeAction: "unLike" });
              }
            }}
          />
        ) : (
          <PostLikeIcon
            onClick={() => {
              if (!loginCheck) {
                requestLoginMdOpen();
              } else {
                handlePostLike({ postId, postLikeAction: "like" });
              }
            }}
          />
        )
      ) : (
        <BanPostLikeIcon />
      )}
      {allowLike && (
        <PostContactCountNumber>{likeCountData}</PostContactCountNumber>
      )}
    </PostContactWrapper>
  );
};

export default PostContactLikeCp;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;

const BanPostLikeIcon = styled(PostLikeIcon)`
  color: #7f7f7f;
  cursor: "";
  &:hover {
    color: #7f7f7f;
  }
`;

const PostContactCountNumber = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;
