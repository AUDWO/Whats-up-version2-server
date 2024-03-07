import styled from "styled-components";
import { GetContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import outPutJoinedDate from "@/utils/outPutJoinedDate";

interface Props {
  userInfo: GetContentUserInfo;
  createdAt: string;
}

const DiaryProfileCp = ({ userInfo, createdAt }: Props) => {
  const { nickname, img } = userInfo;
  const profileImgPresence = userInfo.img === null ? false : true;
  return (
    <MoreContentProfileContainer>
      <ProfileWrapper>
        <MoreContentProfileImgWrapper>
          {profileImgPresence ? (
            <MoreContentProfileImg src={img!} />
          ) : (
            <BasicProfileImgCp width="50px" padding="5px" />
          )}
        </MoreContentProfileImgWrapper>
        <NameAndTypeWrapper>
          <MoreContentProfileName>{nickname}</MoreContentProfileName>
          <MoreType>Diary</MoreType>
        </NameAndTypeWrapper>
      </ProfileWrapper>
      <DiaryDate>{outPutJoinedDate(createdAt)}</DiaryDate>
    </MoreContentProfileContainer>
  );
};

export default DiaryProfileCp;

const MoreContentProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 520px;
  margin-bottom: 70px;
  @media screen and (max-width: 520px) {
    width: 100%;
  }
  @media screen and (max-width: 440px) {
    margin-bottom: 30px;
  }
`;

const MoreContentProfileImgWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const MoreContentProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  object-fit: cover;
`;

const NameAndTypeWrapper = styled.div`
  padding-top: 5px;
`;

const MoreType = styled.div`
  font-size: 14px;
  color: gray;
  padding-left: 10px;
  margin-top: 5px;
`;

const MoreContentProfileName = styled.span`
  font-weigt: 700;
  margin-left: 10px;
  height: 20px;
  margin-top: 10px;
  margin-right: 50%;
  color: ${(props) => props.theme.fontColor};
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const DiaryDate = styled.div`
  font-size: 18px;
  color: #808080;
  padding-bottom: 15px;
  font-weight: 300;
  padding-top: 5px;
`;
