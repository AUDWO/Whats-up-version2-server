import styled from "styled-components";
import { GetStoryForm } from "@/types/contentTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import { ContentUserInfo } from "@/types/userTypes";
interface Props {
  userInfo: ContentUserInfo;
  img: string;
}
const StoryCp = ({ userInfo, img }: Props) => {
  return (
    <Story>
      <StoryImg src={img} />
      <StoryProfileContainer>
        {userInfo.img ? (
          <StoryProfileImg />
        ) : (
          <BasicProfileImgCp width="35px" padding="3px" />
        )}
        <StoryProfileName>{userInfo.nickname}</StoryProfileName>
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
`;

const StoryProfileName = styled.span`
  background-color: white;
  color: black;
  padding: 4px 7px 4px 7px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 5px;
`;
