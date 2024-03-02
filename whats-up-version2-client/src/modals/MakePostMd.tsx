import styled from "styled-components";
import { CloseIcon } from "@components/icons/CloseIcon";

import ButtonCp from "@components/common/ButtonCp";
import MakePostProfileCp from "@components/modals/makePost/MakePostProfileCp";
import MakePostImgSelectorCp from "@components/modals/makePost/MakePostImgSelectorCp";
import MakePostSetUpCp from "@components/modals/makePost/MakePostSetUpCp";
import { useEffect, useRef, MutableRefObject } from "react";

import useModal from "@/customHooks/useModal";
import ModalBackgroundCp from "./ModalBackgroundCp";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postPost } from "@/apis/postApis/postApis";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import postInfo from "@/store/postContentState/postInfoState";
import toggleState from "@/store/toggleState";
import resizeTextareaHeight from "@/utils/resizeTextareaHeight";
import MakePostButtonCp from "@components/modals/makePost/MakePostButtonCp";

const MakePostMd = () => {
  const [postInfoState, setPostInfoState] = useRecoilState(postInfo);
  const resetPostInfo = useResetRecoilState(postInfo);
  const subContentInputOpen = useRecoilValue(
    toggleState("postAllowSubContent")
  );
  const { onClose } = useModal("makePostMd");

  const onResetPostInfo = () => {
    resetPostInfo();
    onClose();
  };

  useEffect(() => {
    return () => {
      onResetPostInfo();
    };
  }, []);

  const mainContentTextarea = useRef<HTMLTextAreaElement>(null);
  const subContentTextarea = useRef<HTMLTextAreaElement>(null);

  return (
    <ModalBackgroundCp atomKey="makePostMd">
      <MakePostContainer>
        <MakePostCloseIcon />
        <MakePostProfileCp />
        <MakePostImgSelectorCp />
        <PostMainContentWrapper>
          <PostMainContentTextarea
            rows={1}
            ref={mainContentTextarea}
            placeholder="메인 컨텐츠 입력..."
            value={postInfoState.mainContent}
            onChange={(e) => {
              resizeTextareaHeight(
                e,
                mainContentTextarea as MutableRefObject<HTMLTextAreaElement>,
                () => {
                  setPostInfoState((prev) => ({
                    ...prev,
                    mainContent: e.target.value,
                  }));
                }
              );
            }}
          />
        </PostMainContentWrapper>
        {subContentInputOpen && (
          <PostSubContentWrapper>
            <PostSubContentTextarea
              ref={subContentTextarea}
              rows={1}
              placeholder="서브 컨텐츠 입력..."
              value={postInfoState.subContent}
              onChange={(e) => {
                resizeTextareaHeight(
                  e,
                  subContentTextarea as MutableRefObject<HTMLTextAreaElement>,
                  () => {
                    setPostInfoState((prev) => ({
                      ...prev,
                      subContent: e.target.value,
                    }));
                  }
                );
              }}
            />
          </PostSubContentWrapper>
        )}
        <MakePostSetUpCp />
        <MakePostButtonCp />
      </MakePostContainer>
    </ModalBackgroundCp>
  );
};

export default MakePostMd;

const MakePostContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
  width: 400px;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.subBgColor};

  @media screen and (max-width: 501px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 420px) {
  }
`;

const MakePostCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: -9%;
  font-size: 35px;
  @media screen and (max-width: 490px) {
    right: 0;
    top: -7%;
  }
`;

//------------PostContent--------------

const PostMainContentWrapper = styled.div`
  margin-top: 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const PostMainContentTextarea = styled.textarea`
  width: 90%;
  border: none;
  border-top: 1px solid ${(props) => props.theme.subBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  outline: none;
  resize: none;
  background-color: ${(props) => props.theme.subBgColor};
  &::placeholder {
    color: #b0b0b0;
  }
`;

const PostSubContentWrapper = styled.div``;

const PostSubContentTextarea = styled.textarea`
  width: 90%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  outline: none;
  color: #b0b0b0;
  resize: none;
  background-color: ${(props) => props.theme.subBgColor};
  &::placeholder {
    color: #b0b0b0;
  }
`;

//------------PostButton-----------------

const MakePostButtonWrapper = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
`;

//------------PostButton-----------------
