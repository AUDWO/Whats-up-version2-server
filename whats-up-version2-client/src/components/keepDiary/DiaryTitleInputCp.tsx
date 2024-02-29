import styled from "styled-components";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import diaryInfo from "@/store/content/diaryInfoState";

const DiaryTitleInputCp = () => {
  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const [diaryInfoState, setDiaryInfoState] = useRecoilState(diaryInfo);

  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto"; //height 초기화
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };

  const titleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryInfoState((prev) => ({ ...prev, title: e.target.value }));
    handleResizeHeight();
  };
  return (
    <DiaryTitleInputSection>
      <DiaryTitleText>Title </DiaryTitleText>
      <DiaryTitleTextArea
        rows={1}
        ref={textarea}
        onChange={titleOnChange}
        placeholder="제목을 입력해주세요."
        value={diaryInfoState.title}
      />
    </DiaryTitleInputSection>
  );
};

export default DiaryTitleInputCp;

const DiaryTitleInputSection = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

const DiaryTitleText = styled.div`
  font-size: 24px;
  color: #acacac;
  margin-bottom: 5px;
`;

const DiaryTitleTextArea = styled.textarea`
  width: 100%;
  padding: 15px 0;
  border: none;
  outline: none;
  resize: none;
  font-size: 20px;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  color: #acacac;
  background-color: ${(props) => props.theme.bgColor};
  box-sizing: border-box;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #acacac;
  }
`;
