import { getOnlyDiary } from "@/apis/diaryApis/getApis";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import MoreContactCp from "@components/common/moreContent/MoreContactCp";
import MoreCommentsRCp from "@components/common/moreContent/moreContentComment/MoreCommentsRCp";
import DiaryContentCp from "@components/diary/DiaryContentCp";
import DiaryImgCp from "@components/diary/DiaryImgCp";
import DiaryProfileCp from "@components/diary/DiaryProfileCp";
import DiaryTitleCp from "@components/diary/DiaryTitleCp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DiaryPage = () => {
  const { diaryId } = useParams();

  const { data: diaryInfo, isLoading } = useQuery({
    queryKey: [`more-diary-${diaryId}`],
    queryFn: () => getOnlyDiary(Number(diaryId)),
  });
  if (isLoading) {
    <div>안ㄴ</div>;
  }

  return (
    <div>
      <Container>
        <MainSideNavCp />
        <MainContentContainer>
          <DiaryContentContainer>
            <DiaryProfileCp userInfo={diaryInfo!.userInfo} />
            <DiaryTitleCp title={diaryInfo!.title} />
            <DiaryImgCp img={diaryInfo!.img} />
            <DiaryContentCp content={diaryInfo!.content} />
            <MoreContactCp />
          </DiaryContentContainer>
        </MainContentContainer>
        <MoreCommentsRCp contentType="diary" />
      </Container>
    </div>
  );
};

export default DiaryPage;

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

const DiaryContentContainer = styled.div`
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
