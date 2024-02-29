import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import styled from "styled-components";
const MakeStoryProfileCp = () => {
  const { data: myInfo } = myInfoQuery();

  return (
    <StoryProfileContainer>
      {myInfo!.img ? <StoryProfileImg /> : <BasicProfileImgCp width="35px" />}
      <StoryProfileNameWapper>
        <StoryProfileName>Peter_09</StoryProfileName>
        <MakeStoryText>Make a story</MakeStoryText>
      </StoryProfileNameWapper>
    </StoryProfileContainer>
  );
};

export default MakeStoryProfileCp;

const StoryProfileContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  display: flex;
  @media screen and (max-width: 900px) {
    display: none;
  }
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
