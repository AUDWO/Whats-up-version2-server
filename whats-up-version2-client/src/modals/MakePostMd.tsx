import styled from "styled-components";
import { CloseIcon } from "@components/icons/CloseIcon";

import ButtonCp from "@components/common/ButtonCp";
import MakePostProfileCp from "@components/modals/makePost/MakePostProfileCp";
import MakePostImgSelectorCp from "@components/modals/makePost/MakePostImgSelectorCp";
import MakePostSetUpCp from "@components/modals/makePost/MakePostSetUpCp";
import { useState } from "react";

import useModal from "@/customHooks/useModal";
import ModalBackgroundCp from "./ModalBackgroundCp";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postPost } from "@/apis/postApis/postApis";
import { useRecoilState } from "recoil";
import postInfo from "@/store/content/postInfoState";

const MakePostMd = () => {
  const [postInfoState, setPostInfoState] = useRecoilState(postInfo);

  const { onClose } = useModal("makePostMd");

  const resetContent = () => {
    setPostInfoState((prev) => ({
      ...prev,
      subContent: "",
      mainContent: "",
      img: "",
    }));
    onClose();
  };

  const { mutate: createPost } = useCustomMutation(postPost);

  const handleCreatePost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createPost({
      img: postInfoState.img,
      subContent: postInfoState.subContent,
      mainContent: postInfoState.mainContent,
      allowComment: false,
      allowSubcontent: false,
      allowLike: false,
    });
  };

  return (
    <ModalBackgroundCp atomKey="makePostMd">
      <MakePostContainer>
        <MakePostCloseIcon />
        <MakePostProfileCp />
        <MakePostImgSelectorCp />
        <PostMainContentWrapper>
          <PostMainContentInput
            placeholder="메인 컨텐츠 입력..."
            value={postInfoState.mainContent}
            onChange={(e) => {
              setPostInfoState((prev) => ({
                ...prev,
                mainContent: postInfoState.mainContent,
              }));
            }}
          />
        </PostMainContentWrapper>
        <PostSubContentWrapper>
          <PostSubContentTextarea
            rows={1}
            placeholder="서브 컨텐츠 입력..."
            value={postInfoState.subContent}
            onChange={(e) => {
              setPostInfoState((prev) => ({
                ...prev,
                subContent: postInfoState.subContent,
              }));
            }}
          />
        </PostSubContentWrapper>
        <MakePostSetUpCp />
        <MakePostButtonWrapper>
          <ButtonCp onClick={handleCreatePost}>게시</ButtonCp>
          <ButtonCp backColor="#ed4956" onClick={resetContent}>
            삭제
          </ButtonCp>
        </MakePostButtonWrapper>
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

const PostMainContentInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid ${(props) => props.theme.subBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  outline: none;
  background-color: ${(props) => props.theme.subBgColor};
  &::placeholder {
    color: #b0b0b0;
  }
`;

const PostSubContentWrapper = styled.div``;

const PostSubContentTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  outline: none;
  color: #b0b0b0;
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
