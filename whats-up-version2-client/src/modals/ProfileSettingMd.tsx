import ModalBackgroundCp from "./ModalBackgroundCp";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import useModal from "@/customHooks/useModal";
import ProfileImgSelectCp from "@components/modals/profileSetting/ProfileImgSelectCp";
import { patchProfileInfo } from "@/apis/userApis";
import { useRecoilState } from "recoil";
import profileInfo from "@/store/postContentState/profileInfoState";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import { useEffect } from "react";

const ProfileSettingMd = () => {
  const { onClose } = useModal("profileSettingMd");

  const { mutate } = useCustomMutation(patchProfileInfo, ["myInfo"]);

  const [profileInfoState, setProfileInfoState] = useRecoilState(profileInfo);

  const { data: myInfo } = myInfoQuery();

  useEffect(() => {
    if (myInfo) {
      setProfileInfoState({
        img: myInfo?.img ? myInfo.img : "",
        name: myInfo.name ? myInfo.name : "",
        nickname: myInfo.nickname,
        introduce: myInfo.introduction ? myInfo.introduction : "",
      });
    }
  }, [myInfo]);

  return (
    <ModalBackgroundCp atomKey="profileSettingMd">
      <ModalContainer>
        <ModalHeader>
          <ModalNameText>프로필 설정</ModalNameText>
          <ModalCloseIcon onClick={onClose} />
        </ModalHeader>
        <ModalContentWrapper>
          <ANameInputWrapper>
            <NameInputWrapper>
              <NameInputText>이름</NameInputText>
              <NameInput
                value={profileInfoState.name}
                onChange={(e) => {
                  setProfileInfoState((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </NameInputWrapper>
            <NicknameInputWrapper>
              <NicknameInputText>닉네임</NicknameInputText>
              <NicknameInput
                value={profileInfoState.nickname}
                onChange={(e) => {
                  setProfileInfoState((prev) => ({
                    ...prev,
                    nickname: e.target.value,
                  }));
                }}
              />
            </NicknameInputWrapper>
          </ANameInputWrapper>
          <IntroduceWrapper>
            <IntroduceText>자기소개</IntroduceText>
            <IntroduceInput
              value={profileInfoState.introduce}
              onChange={(e) => {
                setProfileInfoState((prev) => ({
                  ...prev,
                  introduce: e.target.value,
                }));
              }}
            />
          </IntroduceWrapper>
          <ProfileImgSelectCp img={myInfo!.img} />

          <SaveButtonWrapper>
            <SaveButton
              onClick={() => {
                mutate({ ...profileInfoState });
                onClose();
              }}
            >
              저장하기
            </SaveButton>
          </SaveButtonWrapper>
        </ModalContentWrapper>
      </ModalContainer>
    </ModalBackgroundCp>
  );
};

export default ProfileSettingMd;

const ModalCloseIcon = styled(IoIosCloseCircle)`
  color: #e91e63;
  position: absolute;
  top: 20%;
  right: 1%;
  font-size: 25px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  height: 80%;
  width: 400px;
  background-color: pink;
  background-color: ${(props) => props.theme.mdColor};
  border-radius: 10px;
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const ModalHeader = styled.header`
  border-bottom: 1px solid black;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  padding: 14px 10px;
  position: relative;
`;

const ModalNameText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  padding-top: 15px;
`;

const ANameInputWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const NameInputWrapper = styled.div`
  margin-right: 10px;
  width: 100%;
  box-siznig: border-box;
`;

const NameInput = styled.input`
  border-radius: 5px;
  border: none;
  font-size: 14px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) => props.theme.borderColor};
  background-color: #ebeef1;
  color: ${(props) => props.theme.fontColor};
`;
const NameInputText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const NicknameInputText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const NicknameInputWrapper = styled.div`
  width: 100%;
`;

const NicknameInput = styled.input`
  border-radius: 5px;
  border: none;
  font-size: 14px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) => props.theme.borderColor};
  background-color: #ebeef1;
  color: ${(props) => props.theme.fontColor};
`;

//Introduce

export const IntroduceWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
`;

export const IntroduceInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  height: 120px;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.borderColor};
  background-color: #ebeef1;
`;

export const IntroduceText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColor};
`;

//Introduce

//Button

export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const SaveButton = styled.button`
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #ebeef1;
  cursor: pointer;
`;
//Button
