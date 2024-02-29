import { ContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import styled from "styled-components";
interface Props {
  userInfo: ContentUserInfo;
}
const MorePostProfileCp = ({ userInfo }: Props) => {
  return (
    <MorePostProfileContainer>
      <MorePostProfileWrapper>
        {userInfo.img ? <MoreProfileImg /> : <BasicProfileImgCp width="40px" />}
        <MoreProfileName>Liverpool</MoreProfileName>
      </MorePostProfileWrapper>
    </MorePostProfileContainer>
  );
};

export default MorePostProfileCp;

const MorePostProfileContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MoreProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 10px;
`;

const MorePostProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MoreProfileName = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
`;
