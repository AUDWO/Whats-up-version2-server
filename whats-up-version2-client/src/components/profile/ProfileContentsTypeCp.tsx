import styled from "styled-components";
import { GetContentCountInfo } from "@/types/userTypes";
import { useRecoilState } from "recoil";
import toggleState from "@/store/toggleState";
import { useQueryClient } from "@tanstack/react-query";
interface Props {
  contentCountInfo: GetContentCountInfo;
  userId: number;
}
const ProfileContentsTypeCp = ({ contentCountInfo, userId }: Props) => {
  const { postCount, diaryCount } = contentCountInfo;
  const [contentType, setContentType] = useRecoilState(
    toggleState("profileContentType")
  );
  const queryClient = useQueryClient();

  const handleClickType = () => {
    setContentType(!contentType);
    if (contentType) {
      queryClient.invalidateQueries({ queryKey: [`user-posts-${userId}`] });
    } else {
      queryClient.invalidateQueries({ queryKey: [`user-diaries-${userId}`] });
    }
  };

  return (
    <ProfileContentsTypeContainer>
      <ProfileTypeSelectContainer>
        <ProfileTypeContainer onClick={handleClickType} onBorder={!contentType}>
          <ProfileTypeTitle>게시물</ProfileTypeTitle>
          <ProfileContentCountNumber>{postCount}</ProfileContentCountNumber>
        </ProfileTypeContainer>
        <ProfileTypeContainer onClick={handleClickType} onBorder={contentType}>
          <ProfileTypeTitle>일기</ProfileTypeTitle>
          <ProfileContentCountNumber>{diaryCount}</ProfileContentCountNumber>
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
  margin-right: 10px;
`;

const ProfileContentCountNumber = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
