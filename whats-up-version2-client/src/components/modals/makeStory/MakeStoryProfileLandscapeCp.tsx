import styled from "styled-components";

const MakeStoryProfileLandscapeCp = () => {
  return (
    <StoryProfileLandscapeContainer>
      <StoryProfileImg />
      <StoryProfileNameWapper>
        <StoryProfileName>Peter_09</StoryProfileName>
        <MakeStoryText>Make a story</MakeStoryText>
      </StoryProfileNameWapper>
    </StoryProfileLandscapeContainer>
  );
};

export default MakeStoryProfileLandscapeCp;

const StoryProfileLandscapeContainer = styled.div`
  width: 100%;
  height: 80px;
  display: none;
  padding-left: 20px;
  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  border-radius: 7px 7px 0px 0px;
`;

const StoryProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: black;
`;

const StoryProfileNameWapper = styled.div`
  margin-left: 10px;
  padding-top: 5px;
`;
const MakeStoryText = styled.div`
  font-size: 14px;
  color: #b0b0b0;
`;

const StoryProfileName = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;
