import styled from "styled-components";
import { PostCommentIcon } from "@components/icons/PostContactIcons";
import useModal from "@/customHooks/useModal";
import { useSetRecoilState } from "recoil";
import morePostMdIdAtom from "@/store/getContentState/morePostMdIdState";
import { useQuery } from "@tanstack/react-query";
import { getPostCommentCountInfo } from "@/apis/postApis/getApis";

interface Props {
  allowComment: boolean;
  postId: number;
  preCommentCount: number;
}

const PostContactCommentCp = ({
  allowComment,
  postId,
  preCommentCount,
}: Props) => {
  const { onOpen: postCommentMdOpen } = useModal("postCommentMd");
  const setMorePostMdIdState = useSetRecoilState(morePostMdIdAtom);

  const { data: commentInfo, isLoading } = useQuery({
    queryKey: [`postCommentCount-${postId}`],
    queryFn: () => getPostCommentCountInfo(postId),
  });

  const commentCountData = commentInfo?.commentCount || preCommentCount;

  return (
    <PostContactWrapper>
      {allowComment ? (
        <PostCommentIcon
          onClick={() => {
            setMorePostMdIdState(postId);
            postCommentMdOpen();
          }}
        />
      ) : (
        <BanPostCommentIcon />
      )}
      {allowComment && (
        <PostContactCountNumber>{commentCountData}</PostContactCountNumber>
      )}
    </PostContactWrapper>
  );
};

export default PostContactCommentCp;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  margin-right: 10px;
`;

const PostContactCountNumber = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const BanPostCommentIcon = styled(PostCommentIcon)`
  color: #7f7f7f;
  cursor: "";
  &:hover {
    color: #7f7f7f;
  }
`;
