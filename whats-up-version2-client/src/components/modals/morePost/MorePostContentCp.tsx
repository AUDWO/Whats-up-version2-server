import { ContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import styled from "styled-components";
interface Props {
  userInfo: ContentUserInfo;
  subContent: string;
}
const MorePostContentCp = ({ userInfo, subContent }: Props) => {
  return (
    <MorePostContentContainer>
      <MoreProfileImgWrapper>
        {userInfo.img ? <MoreProfileImg /> : <BasicProfileImgCp width="40px" />}
      </MoreProfileImgWrapper>
      <MorePostContentWrapper>
        <MoreProfileName>liverpool</MoreProfileName>
        <MorePostSubContent>
          안녕하십니까 안녕하십니까wdwdwwdwddwdwdwdw
        </MorePostSubContent>
      </MorePostContentWrapper>
    </MorePostContentContainer>
  );
};

export default MorePostContentCp;

const MorePostContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MorePostContentWrapper = styled.div`
  min-height: 40px;
  margin-left: 10px;
  margin-top: 7px;
`;

const MorePostSubContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;

const MoreProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const MoreProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const MoreProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
