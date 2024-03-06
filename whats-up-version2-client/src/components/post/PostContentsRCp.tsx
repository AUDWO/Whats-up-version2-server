import styled from "styled-components";
import PostCp from "./PostCp";
import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "@/apis/postApis/getApis";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";

const PostContentsRCp = () => {
  const { data: postContents, isLoading } = useQuery({
    queryKey: ["all-post"],
    queryFn: getAllPost,
  });

  const { data: myInfo, isLoading: myInfoLoading } = myInfoQuery();

  if (isLoading && myInfoLoading) {
    <LoadingContainer></LoadingContainer>;
  }

  if (postContents) {
    console.log(postContents, "postContents - -9 -9- 9-9 -9-9");
  }
  return (
    <PostsContainer>
      {postContents?.map((postInfo) => (
        <PostCp postInfo={postInfo} loginCheck={myInfo!.loginCheck} />
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

  @media screen and (max-width: 501px) {
    justify-content: cneter;
  }
  padding-top: 20px;
`;

const LoadingContainer = styled.div`
  width: 600px;
  height: 700px;
  background-color: gray;
`;
