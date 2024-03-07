import diaryInfo from "@/store/postContentState/diaryInfoState";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const DiaryContentInputCp = () => {
  const [diaryInfoState, setDiaryInfoState] = useRecoilState(diaryInfo);
  return (
    <WriteContainer>
      <DiaryContentTextWrapper>
        <DiaryContentText>Content</DiaryContentText>
      </DiaryContentTextWrapper>
      <DiaryContentInputWrapper>
        <DiaryContentTextarea
          onChange={(e) => {
            setDiaryInfoState((prev) => ({ ...prev, content: e.target.value }));
          }}
          value={diaryInfoState.content}
        />
      </DiaryContentInputWrapper>
    </WriteContainer>
  );
};

export default DiaryContentInputCp;

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
  }
`;

const DiaryContentTextWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 4px;
`;

const DiaryContentText = styled.div`
  color: #acacac;
  font-size: 25px;
`;

const DiaryContentInputWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const DiaryContentTextarea = styled.textarea`
  width: 99%;
  border: none;
  resize: none;
  outline: none;
  height: 300px;
  font-size: 16px;
  color: #acacac;
  background-color: ${(props) => props.theme.bgColor};
`;
