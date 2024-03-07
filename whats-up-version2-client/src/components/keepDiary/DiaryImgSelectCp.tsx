import styled from "styled-components";
import { DiarySelectImgIcon, PlusIcon } from "@components/icons/KeepDiaryIcons";
import { useState } from "react";
import { ArrowDownIcon } from "@components/icons/commonIcons/ArrowDownIcon";
import { ArrowUpIcon } from "@components/icons/commonIcons/ArrowUpIcon";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postPreImg } from "@/apis/postPreImg";
import { useSetRecoilState } from "recoil";
import diaryInfo from "@/store/postContentState/diaryInfoState";
import onStoreImg from "@/utils/onStoreImg";
const DiaryImgSelectCp = () => {
  const [imgSelectOpen, setImgSelectOpen] = useState(false);
  const setDiaryInfoStatee = useSetRecoilState(diaryInfo);

  const [preImg, setPreImg] = useState("");
  const { mutate } = useCustomMutation(postPreImg, [""], (data) => {
    if (data) {
      setDiaryInfoStatee((prev) => ({ ...prev, img: data.url }));
    }
  });
  return (
    <DiaryImgSelectContainer>
      <DiaryImgToggleSelectWrapper>
        <DiaryImgToggleSelectText>사진 업로드</DiaryImgToggleSelectText>
        {imgSelectOpen ? (
          <ArrowUpIcon
            onClick={() => {
              setImgSelectOpen(false);
            }}
            color={"#acacac"}
            fontSize={"20px;"}
          />
        ) : (
          <ArrowDownIcon
            onClick={() => {
              setImgSelectOpen(true);
            }}
            color={"#acacac"}
            fontSize={"20px;"}
          />
        )}
      </DiaryImgToggleSelectWrapper>
      {imgSelectOpen && (
        <>
          <DiaryImgSelectButtonWrapper>
            <DiaryImgSelectButton htmlFor="diaryImg">
              사진 선택
            </DiaryImgSelectButton>
            <DiaryImgSelectInput
              type="file"
              accept="image/*"
              hidden
              id="diaryImg"
              onChange={(e) => {
                onStoreImg(e, setPreImg, mutate);
              }}
            />
          </DiaryImgSelectButtonWrapper>
          <DiarySelectImgWrapper>
            {preImg.length > 1 ? (
              <DiaryImgWrapper>
                <DiaryImg src={preImg} />
              </DiaryImgWrapper>
            ) : (
              <DiarySelectImgIcon />
            )}
          </DiarySelectImgWrapper>
        </>
      )}
    </DiaryImgSelectContainer>
  );
};

export default DiaryImgSelectCp;

const DiaryImgWrapper = styled.div`
  width: 302px;
  height: 302px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9;
  top: 0;
`;

const DiaryImg = styled.img`
  width: 262px;
  height: 206px;
  border-radius: 10px;
  object-fit: cover;
`;

const DiaryImgSelectInput = styled.input``;
const DiaryImgSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 20px;
`;
const DiarySelectImgWrapper = styled.div`
  width: 320px;
  height: 300px;
  color: #4199ff;
  position: relative;
  @media screen and (max-width: 985px) {
    width: 200px;
    height: 200px;
  }
`;

const DiaryImgSelectButtonWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 50px;
  align-items: center;
  @media screen and (max-width: 520px) {
  }
`;

const DiaryImgSelectButton = styled.label`
  color: #c9c9c9;
  font-size: 18px;
  margin-left: 25px;
  cursor: pointer;
  background-color: #4199ff;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: white;
`;

const DiaryImgToggleSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
const DiaryImgToggleSelectText = styled.div`
  color: #acacac;
  display: flex;
  align-items: center;
`;

const DiaryImgToggleSelectButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: orange;
`;
