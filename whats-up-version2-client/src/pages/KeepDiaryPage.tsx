import { postDiary } from "@/apis/diaryApis/postApis";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import diaryInfo from "@/store/content/diaryInfoState";
import toggleState from "@/store/toggleState";
import MobileHomePageHeaderCp from "@components/common/MobileHomePageHeaderCp";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import DiaryAdvancedSetUpCp from "@components/keepDiary/DiaryAdvancedSetUpCp";
import DiaryContentInputCp from "@components/keepDiary/DiaryContentInputCp";
import DiaryImgSelectCp from "@components/keepDiary/DiaryImgSelectCp";
import DiaryTitleInputCp from "@components/keepDiary/DiaryTitleInputCp";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";

const KeepDiaryPage = () => {
  const diaryInfoState = useRecoilValue(diaryInfo);
  const diaryInfoReset = useResetRecoilState(diaryInfo);
  const diaryAllowLike = useRecoilValue(toggleState("diaryAllowLike"));
  const diaryAllowComment = useRecoilValue(toggleState("diaryAllowComment"));
  const { mutate: createDiary } = useCustomMutation(postDiary);

  const handleCreateDiary = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createDiary({
      ...diaryInfoState,
      allowLike: diaryAllowLike,
      allowComment: diaryAllowComment,
    });
  };

  const handleResetDiary = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    diaryInfoReset();
  };

  return (
    <Container>
      <MainSideNavCp />
      <MainContents>
        <MobileHomePageHeaderCp />
        <WriteContainer>
          <DiaryTitleInputCp />
          <DiaryContentInputCp />
        </WriteContainer>
        <SettingContainer>
          <SettingTextWrapper>
            <SettingText>Setting</SettingText>
          </SettingTextWrapper>
          <SettingDetailsContainer>
            <DiaryImgSelectCp />
            <DiaryAdvancedSetUpCp />
          </SettingDetailsContainer>
          <MakeDiaryButtonsWrapper>
            <MakeDiaryButton onClick={handleCreateDiary}>게시</MakeDiaryButton>
            <DeleteDiaryButton onClick={handleResetDiary}>
              삭제
            </DeleteDiaryButton>
          </MakeDiaryButtonsWrapper>
        </SettingContainer>
      </MainContents>
    </Container>
  );
};

export default KeepDiaryPage;

const WriteContainer = styled.div`
  width: 420px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 622px) {
    width: 500px;
    height: auto;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
    margin-top: 70px;
  }
`;

const SettingContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    width: 600px;
  }

  @media screen and (max-width: 622px) {
    width: 500px;
    height: auto;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-left: 270px;
  @media screen and (max-width: 1330px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 985px) {
    flex-direction: column;
  }
  @media screen and (max-width: 830px) {
    padding-left: 0;
  }
`;

const MainContents = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
  }
  margin-bottom: 80px;
`;
//--------------setting--------------------

const SettingTextWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c3;
  width: 100%;
  margin-top: 40px;
  padding-bottom: 5px;
`;

const SettingText = styled.div`
  font-size: 24px;
  color: #acacac;
`;

const SettingDetailsContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 985px) {
    flex-direction: row;
    width: 420px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: row;
    width: 100%;
  }
`;

//--------------setting--------------------

//-----------Keep Diary Button-------------

const MakeDiaryButtonsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  @media screen and (max-width: 985px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 705px) {
    margin-bottom: 100px;
  }
`;

const MakeDiaryButton = styled.button`
  background-color: #4199ff;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-right: 40px;
`;

const DeleteDiaryButton = styled.button`
  background-color: #ed4956;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-left: 40px;
`;

//-----------Keep Diary Button-------------
