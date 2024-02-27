import styled from "styled-components";

const StoryCp = () => {
  return (
    <Story>
      <StoryImg
        src={
          "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
        }
      />
      <StoryProfileContainer>
        <StoryProfileImg />
        <StoryProfileName>peterwdwd</StoryProfileName>
      </StoryProfileContainer>
    </Story>
  );
};

export default StoryCp;

const Story = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 17px;
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
  flex-shrink: 0;
  background-color: hotPink;
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
  width: 100%;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryProfileImg = styled.img`
  border: 2px solid black;
  background-color: white;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-bottom: 5px;
`;

const StoryProfileName = styled.span`
  background-color: white;
  color: black;
  padding: 4px 7px 4px 7px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  margin: 0 auto;
`;
