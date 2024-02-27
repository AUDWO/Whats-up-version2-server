import styled from "styled-components";
import PostCp from "./PostCp";

const PostContentsRCp = () => {
  return (
    <PostsContainer>
      <PostCp />
      <PostCp />
      <PostCp />
    </PostsContainer>
  );
};

export default PostContentsRCp;
const PostsContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  padding-top: 20px;
`;
