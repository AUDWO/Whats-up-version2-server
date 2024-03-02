import styled from "styled-components";
import PostCp from "./PostCp";
import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "@/apis/postApis/getApis";

const PostContentsRCp = () => {
  const { data: postContents, isLoading } = useQuery({
    queryKey: ["all-post"],
    queryFn: getAllPost,
  });

  console.log("posstContents - postContents - postContents");

  if (isLoading) {
    <LoadingContainer></LoadingContainer>;
  }

  if (postContents) {
    console.log(postContents, "postContents - -9 -9- 9-9 -9-9");
  }
  return (
    <PostsContainer>
      {postContents?.map((postInfo) => (
        <PostCp postInfo={postInfo} />
      ))}
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

const LoadingContainer = styled.div`
  width: 600px;
  height: 700px;
  background-color: gray;
`;
