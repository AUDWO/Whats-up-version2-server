import styled from "styled-components";
import { LuDot } from "react-icons/lu";

const MakePostProfileCp = () => {
  return (
    <ProfileContainer>
      <ProfileImg />
      <ProfileNameWrapper>
        <ProfileName>Peter</ProfileName>
        <MakePostTextWrapper>
          <MakePostTextDot />
          <MakePostText>make post</MakePostText>
        </MakePostTextWrapper>
      </ProfileNameWrapper>
    </ProfileContainer>
  );
};

export default MakePostProfileCp;

const ProfileContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 15px;
  padding-top: 15px;
  display: flex;
  background-color: ${(props) => props.theme.subBgColor};
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
`;

const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 600;
  margin-top: 5px;
  margin-left: 5px;
  color: ${(props) => props.theme.fontColor};
`;

const MakePostTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MakePostText = styled.span`
  color: #b0b0b0;
`;

const MakePostTextDot = styled(LuDot)`
  color: #b0b0b0;
`;
