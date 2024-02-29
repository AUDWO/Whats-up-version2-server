import styled from "styled-components";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import StoryProfileCp from "@components/story/StoryProfileCp";
import StoryImgCp from "@components/story/StoryImgCp";
import MoreContentCp from "@components/common/moreContent/MoreContentCp";
import MoreContactCp from "@components/common/moreContent/MoreContactCp";
import MoreCommentsRCp from "@components/common/moreContent/moreContentComment/MoreCommentsRCp";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOnlyStory } from "@/apis/storyApis/getApis";

const StoryPage = () => {
  const { storyId } = useParams();

  const { data: storyInfo, isLoading } = useQuery({
    queryKey: [`more-story-${storyId}`],
    queryFn: () => getOnlyStory(Number(storyId)),
  });
  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <MainSideNavCp />
      <MainContentContainer>
        <StoryContentContainer>
          <StoryProfileCp userInfo={storyInfo!.userInfo} />
          <StoryImgCp img={storyInfo!.img} />
          <MoreContentCp content={storyInfo!.content} />
          <MoreContactCp />
        </StoryContentContainer>
      </MainContentContainer>
      <MoreCommentsRCp contentType="story" />
    </Container>
  );
};

export default StoryPage;

const Container = styled.div`
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 901px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StoryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 734px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
