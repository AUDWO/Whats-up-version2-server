import styled from "styled-components";
import PostContactCp from "./PostContactCp";
import PostContentInfoCp from "./PostContentInfoCp";
import { GetPostForm } from "@/types/contentTypes";
import PostContentCp from "./PostContentCp";
interface Props {
  postInfo: GetPostForm;
  loginCheck: boolean;
}

const PostCp = ({ postInfo, loginCheck }: Props) => {
  const {
    img,
    User,
    mainContent,
    allowContactInfo,
    contactCountInfo,
    id: postId,
    likeStatus,
  } = postInfo;

  console.log(postInfo, "postInfo");

  return (
    <PostContainer>
      <PostContentInfoCp img={img} userInfo={User} />
      <PostContactCp
        allowContactInfo={allowContactInfo}
        contactCountInfo={contactCountInfo}
        postId={postId}
        loginCheck={loginCheck}
        postLiked={likeStatus}
      />
      <PostContentCp nickname={User.nickname} mainContent={mainContent} />
    </PostContainer>
  );
};

export default PostCp;
const PostContainer = styled.div`
  width: 420px;
  height: auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 501px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 60px;
  }
  position: relative;
`;
