import styled from "styled-components";

import { GetPostContactCount, GetPostAllowContact } from "@/types/contentTypes";

import PostContactLikeCp from "./postContact/PostContactLikeCp";
import PostContactCommentCp from "./postContact/PostContactCommentCp";

interface Props {
  contactCountInfo: GetPostContactCount;
  allowContactInfo: GetPostAllowContact;
  postId: number;
  postLiked: boolean;
  loginCheck: boolean;
}

const PostContactCp = ({
  contactCountInfo,
  allowContactInfo,
  postId,
  postLiked: prePostLiked,
  loginCheck,
}: Props) => {
  const { allowLike, allowComment } = allowContactInfo;
  const { likeCount: preLikeCount, commentCount: preCommentCount } =
    contactCountInfo;

  return (
    <PostContactContainer>
      <PostContactLikeCp
        allowLike={allowLike}
        prePostLiked={prePostLiked}
        preLikeCount={preLikeCount}
        loginCheck={loginCheck}
        postId={postId}
      />
      <PostContactCommentCp
        allowComment={allowComment}
        postId={postId}
        preCommentCount={preCommentCount}
      />
    </PostContactContainer>
  );
};

export default PostContactCp;

/*


*/

const PostContactContainer = styled.div`
  width: 70px;
  height: 100%;

  @media screen and (max-width: 501px) {
    display: none;
  }
`;
