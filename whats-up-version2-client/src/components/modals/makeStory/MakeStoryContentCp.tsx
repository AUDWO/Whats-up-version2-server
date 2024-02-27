import storyInfo from "@/store/content/storyInfoState";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const MakeStoryContentTextareaCp = () => {
  const [storyInfoState, setStoryInfoState] = useRecoilState(storyInfo);
  return (
    <StoryContentTextareaWrapper>
      <StoryContentTextarea
        placeholder="내용을 작성해주세요"
        value={storyInfoState.content}
        onChange={(e) => {
          setStoryInfoState((prev) => ({
            ...prev,
            content: e.target.value,
          }));
        }}
      />
    </StoryContentTextareaWrapper>
  );
};

export default MakeStoryContentTextareaCp;

const StoryContentTextareaWrapper = styled.div`
  height: 250px;
`;

const StoryContentTextarea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  height: 250px;
  font-size: 16px;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid ${(props) => props.theme.subBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  background-color: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.fontColor};
`;
