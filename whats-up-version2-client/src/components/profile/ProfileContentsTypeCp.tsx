import styled from "styled-components";

const ProfileContentsTypeCp = () => {
  return (
    <ProfileContentsTypeContainer>
      <ProfileTypeSelectContainer>
        <ProfileTypeContainer>
          <ProfileTypeTitle>게시물</ProfileTypeTitle>
          <ProfileContentCountNumber>7</ProfileContentCountNumber>
        </ProfileTypeContainer>
        <ProfileTypeContainer>
          <ProfileTypeTitle>일기</ProfileTypeTitle>
          <ProfileContentCountNumber>7</ProfileContentCountNumber>
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

const ProfileTypeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  border-bottom: 2px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

const ProfileTypeTitle = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const ProfileContentCountNumber = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
