import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";

const MakeStoryImgSelectorCp = () => {
  return (
    <StoryImgSelectContainer>
      <StoryImgSelectWrapper>
        <StoryImgSelectText>사진을 선택해주세요.</StoryImgSelectText>
        <ButtonCp>사진 선택</ButtonCp>
      </StoryImgSelectWrapper>
    </StoryImgSelectContainer>
  );
};

export default MakeStoryImgSelectorCp;

const StoryImgSelectContainer = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.subBorderColor};
`;

const StoryImgSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StoryImgSelectText = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;
