import styled from "styled-components";
import { UserContentInfo } from "@/types/userTypes";
import { useRecoilState } from "recoil";
import toggleState from "@/store/toggleState";
interface Props {
  contentInfo: UserContentInfo;
}
const ProfileContentsTypeCp = ({ contentInfo }: Props) => {
  // const { postCount, diaryCount } = contentInfo;
  const [contentType, setContentType] = useRecoilState(
    toggleState("profileContentType")
  );

  const handleClickType = () => {
    setContentType(!contentType);
  };
  return (
    <ProfileContentsTypeContainer>
      <ProfileTypeSelectContainer>
        <ProfileTypeContainer onClick={handleClickType} onBorder={contentType}>
          <ProfileTypeTitle>게시물</ProfileTypeTitle>
          <ProfileContentCountNumber>{1}</ProfileContentCountNumber>
        </ProfileTypeContainer>
        <ProfileTypeContainer onClick={handleClickType} onBorder={!contentType}>
          <ProfileTypeTitle>일기</ProfileTypeTitle>
          <ProfileContentCountNumber>{2}</ProfileContentCountNumber>
        </ProfileTypeContainer>
      </ProfileTypeSelectContainer>
    </ProfileContentsTypeContainer>
  );
};

export default ProfileContentsTypeCp;
const ProfileContentsTypeContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileTypeSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const ProfileTypeContainer = styled.div<{ onBorder: boolean }>`
  display: flex;
  align-items: center;
  height: 25px;
  ${(props) =>
    props.onBorder && `border-bottom:2px solid ${props.theme.fontColor}`};
  cursor: pointer;
`;

const ProfileTypeTitle = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const ProfileContentCountNumber = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
