import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";
import { CloseIcon } from "@components/icons/CloseIcon";
import useModal from "@/customHooks/useModal";
import ModalBackgroundCp from "./ModalBackgroundCp";
import MakeStoryImgSelectorCp from "@components/modals/makeStory/MakeStoryImgSelectorCp";
import MakeStoryContentTextareaCp from "@components/modals/makeStory/MakeStoryContentCp";
import MakeStoryProfileCp from "@components/modals/makeStory/MakeStoryProfileCp";
import MakeStoryProfileLandscapeCp from "@components/modals/makeStory/MakeStoryProfileLandscapeCp";
import { useRecoilValue } from "recoil";
import storyInfo from "@/store/content/storyInfoState";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postStory } from "@/apis/storyApis/postApis";

const MakeStoryMd = () => {
  const { onClose } = useModal("makeStoryMd");

  const storyInfoState = useRecoilValue(storyInfo);

  const { mutate: createStory } = useCustomMutation(postStory);

  const handlePostStory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createStory({ content: storyInfoState.content, img: storyInfoState.img });
  };

  return (
    <ModalBackgroundCp atomKey="makeStoryMd">
      <MakeStoryModalContainer>
        <MakeStoryCloseIcon
          onClick={() => {
            onClose();
          }}
        />
        <MakeStoryProfileLandscapeCp />
        <MakeStoryImgSelectorCp />
        <StoryContentWrapper>
          <MakeStoryProfileCp />
          <MakeStoryContentTextareaCp />
          <MakeStoryButtonWrapper>
            <ButtonCp onClick={handlePostStory}>게시하기</ButtonCp>
            <ButtonCp>삭제하기</ButtonCp>
          </MakeStoryButtonWrapper>
        </StoryContentWrapper>
      </MakeStoryModalContainer>
    </ModalBackgroundCp>
  );
};

export default MakeStoryMd;

const MakeStoryModalContainer = styled.div`
  width: 700px;
  height: 450px;
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 7px;
  display: flex;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 900px) {
    width: 350px;
    height: 80%;
    display: block;
  }
`;

const MakeStoryCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: -5%;
  top: -7%;
  font-size: 30px;
  @media screen and (max-width: 900px) {
    right: 0;
  }
`;

//-------------------Story Profile------------------------

//-------------------Story Profile------------------------

//-------------------Story Content-------------------------

const StoryContentWrapper = styled.div`
  width: 350px;
  height: 450px;
`;

//-------------------Story Content-------------------------

//---------------------Story Button

const MakeStoryButtonWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
  }
`;
