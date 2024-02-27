import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import useModal from "@/customHooks/useModal";
const MakeStoryCp = () => {
  const { onOpen } = useModal("makeStoryMd");
  return (
    <Story>
      <StoryProfileContainer>
        <MakeStoryText>Make a story</MakeStoryText>
        <MakeStoryButtonIconWrapper
          onClick={() => {
            onOpen();
          }}
        >
          <MakeStoryButtonIcon />
        </MakeStoryButtonIconWrapper>
        <StoryProfileName>WHAT'S UP</StoryProfileName>
      </StoryProfileContainer>
    </Story>
  );
};

export default MakeStoryCp;

const Story = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 17px;
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
  flex-shrink: 0;
  background-color: #f7dd07;
  position: relative;
  cursor: pointer;
`;
const StoryImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 17px;
  object-fit: cover;
`;

const StoryProfileContainer = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const MakeStoryButtonIconWrapper = styled.div`
  background-color: #4199ff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
`;

const MakeStoryButtonIcon = styled(FaPlus)`
  font-size: 30px;
  color: #f7dd07;
`;

const MakeStoryText = styled.div`
  color: #4199ff;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 15px;
`;

const StoryProfileName = styled.span`
  background-color: white;
  color: black;
  padding: 7px 7px 4px 7px;
  border-radius: 8px;
  font-size: 11px;
  margin: 0 auto;
  font-weight: 700;
`;
