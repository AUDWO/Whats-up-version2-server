import styled from "styled-components";
import { useState } from "react";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postPreImg } from "@/apis/postPreImg";
import { useSetRecoilState } from "recoil";
import postInfo from "@/store/postContentState/postInfoState";
import onStoreImg from "@/utils/onStoreImg";
import { CloseIcon } from "@components/icons/CloseIcon";

const MakePostImgSelectorCp = () => {
  const setPostInfoState = useSetRecoilState(postInfo);
  const [preImg, setPreImg] = useState("");

  const { mutate } = useCustomMutation(postPreImg, [""], (data) => {
    if (data) {
      setPostInfoState((prev) => ({ ...prev, img: data.url }));
    }
  });

  return (
    <PostImgSelectContainer>
      {preImg.length > 1 && (
        <ModalCloseIcon
          onClick={() => {
            setPostInfoState((prev) => ({ ...prev, img: "" }));
            setPreImg("");
          }}
        />
      )}
      {preImg.length > 1 ? (
        <PostImg src={preImg} />
      ) : (
        <PostImgSelectButtonWrapper>
          <PostImgDropDownText>
            이미지를 드래그하여 업로드하세요.
          </PostImgDropDownText>
          <PostImgSelectButton htmlFor="postImg">사진 선택</PostImgSelectButton>
          <PostImgSelectInput
            type="file"
            accept="image/*"
            hidden
            id="postImg"
            onChange={(e) => {
              onStoreImg(e, setPreImg, mutate);
            }}
          />
        </PostImgSelectButtonWrapper>
      )}
    </PostImgSelectContainer>
  );
};
export default MakePostImgSelectorCp;

const ModalCloseIcon = styled(CloseIcon)`
  color: #e91e63;
  position: absolute;
  top: 2%;
  right: 1%;
  font-size: 25px;
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostImgSelectButton = styled.label`
  border: 1px solid blue;
  background-color: ${(props) => props.theme.color.sub};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border: none;
  color: white;
  cursor: pointer;
`;

const PostImgSelectInput = styled.input``;

const PostImgSelectButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.subBgColor};
`;
const PostImgSelectContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PostImgDropDownText = styled.div`
  color: #b0b0b0;
  font-size: 20px;
  margin-bottom: 20px;
`;
