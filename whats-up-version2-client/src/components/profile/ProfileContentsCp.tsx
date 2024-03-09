import styled from "styled-components";
import NoProfileContentsCp from "./NoProfileContentsCp";
import { useQuery } from "@tanstack/react-query";
import { getUserAllPost } from "@/apis/postApis/getApis";
import useModal from "@/customHooks/useModal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import morePostMdIdAtom from "@/store/getContentState/morePostMdIdState";
import toggleState from "@/store/toggleState";
import { getUserAllDiary } from "@/apis/diaryApis/getApis";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPostForm } from "@/types/contentTypes";
import { GetDiaryForm } from "@/types/contentTypes";

interface Props {
  userId: number;
}

const ProfileContentsCp = ({ userId }: Props) => {
  const contentType = useRecoilValue(toggleState("profileContentType"));
  const { data: userPosts, isLoading } = useQuery({
    queryKey: [`user-posts-${userId}`],
    queryFn: () => getUserAllPost(userId),
    enabled: !contentType,
  });

  const { data: userDiaries } = useQuery({
    queryKey: [`user-diaries-${userId}`],
    queryFn: () => getUserAllDiary(userId),
    enabled: contentType,
  });

  const { onOpen } = useModal("postCommentMd");
  const setMorePostMdIdState = useSetRecoilState(morePostMdIdAtom);
  const navigate = useNavigate();
  if (isLoading) {
  }

  const contents = contentType ? userPosts : userPosts;

  return (
    <ProfileContentsContainer>
      {contents?.length === 0 && (
        <NoProfileContentsCp contentType={contentType} />
      )}
      <ProfileContentsWrapper>
        {contents?.map((post) => (
          <ProfileContentContainer
            onClick={() => {
              if (contentType) {
                navigate("diary-blog");
              } else {
                setMorePostMdIdState(post.id);
                onOpen();
              }
            }}
          >
            <ProfileContentImg src={post.img} alt="컨텐츠 이미지" />
          </ProfileContentContainer>
        ))}
      </ProfileContentsWrapper>
    </ProfileContentsContainer>
  );
};

//{contentsData!.length < 1 && <NoProfileContentsCp />}
export default ProfileContentsCp;

const ProfileContentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  @media screen and (max-width: 500px) {
    padding-bottom: 100px;
  }
`;
const ProfileContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
const ProfileContentContainer = styled.div`
  background-color: orange;
  padding-bottom: 100%;
  position: relative;
`;

const ProfileContentImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  object-fit: cover;
`;
