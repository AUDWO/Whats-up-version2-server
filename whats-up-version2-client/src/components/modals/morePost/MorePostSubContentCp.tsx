import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import { GetContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
interface Props {
  userInfo: GetContentUserInfo;
  subContent: string;
}
const MorePostSubContentCp = ({ userInfo, subContent }: Props) => {
  const { data: myInfo } = myInfoQuery();

  const navigate = useNavigate();

  const handleLinkToProfilePage = () => {
    if (myInfo?.id === userInfo.id) {
      navigate("/profile/my");
    } else {
      navigate(`/profile/other/${userInfo.id}`);
    }
  };

  return (
    <MorePostContentContainer>
      <MoreProfileImgWrapper>
        {userInfo.img ? (
          <MoreProfileImg onClick={handleLinkToProfilePage} />
        ) : (
          <BasicProfileImgCp onClick={handleLinkToProfilePage} width="35px" />
        )}
      </MoreProfileImgWrapper>
      <MorePostContentWrapper>
        <MoreProfileName>{userInfo.nickname}</MoreProfileName>
        <MorePostSubContent>{subContent}</MorePostSubContent>
      </MorePostContentWrapper>
    </MorePostContentContainer>
  );
};

export default MorePostSubContentCp;

const MorePostContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
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
