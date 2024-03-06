import styled from "styled-components";
import PostContactCp from "./PostContactCp";
import PostContentInfoCp from "./PostContentInfoCp";
import { GetPostForm } from "@/types/contentTypes";
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
    postLiked,
  } = postInfo;

  return (
    <PostContainer>
      <PostContentInfoCp
        img={img}
        mainContent={mainContent}
        userInfo={User}
        contactCountInfo={contactCountInfo}
        allowContactInfo={allowContactInfo}
      />
      <PostContactCp
        postId={postId}
        allowContactInfo={allowContactInfo}
        contactCountInfo={contactCountInfo}
        postLiked={postLiked}
        loginCheck={loginCheck}
      />
    </PostContainer>
  );
};

export default PostCp;
const PostContainer = styled.div`
  width: 480px;
  height: auto;
  margin-bottom: 100px;
  display: flex;
  @media screen and (max-width: 501px) {
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }
  position: relative;
`;
