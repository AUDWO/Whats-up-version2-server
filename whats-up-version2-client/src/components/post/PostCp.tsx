import styled from "styled-components";
import PostContactCp from "./PostContactCp";
import PostContentInfoCp from "./PostContentInfoCp";
import { GetPostForm } from "@/types/contentTypes";
interface Props {
  postInfo: GetPostForm;
}
const PostCp = ({ postInfo }: Props) => {
  const { img, User, mainContent, contactAllowInfo, contactCountInfo } =
    postInfo;
  return (
    <PostContainer>
      <PostContentInfoCp
        img={img}
        mainContent={mainContent}
        userInfo={User}
        contactCountInfo={contactCountInfo}
        contactAllowInfo={contactAllowInfo}
      />
      <PostContactCp
        contactAllowInfo={contactAllowInfo}
        contactCountInfo={contactCountInfo}
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
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }
  position: relative;
`;
