import styled from "styled-components";
import { ContentUser } from "@/types/userTypes";

interface Props {
  userInfo: ContentUser;
}

const DiaryProfileCp = ({ userInfo }: Props) => {
  return (
    <MoreContentProfileContainer>
      <ProfileWrapper>
        <MoreContentProfileImgWrapper>
          <MoreContentProfileImg
            src={
              "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
            }
          />
        </MoreContentProfileImgWrapper>
        <NameAndTypeWrapper>
          <MoreContentProfileName>Peter_099</MoreContentProfileName>
          <MoreType>Diary</MoreType>
        </NameAndTypeWrapper>
      </ProfileWrapper>
      <DiaryDate>2022-09-12</DiaryDate>
    </MoreContentProfileContainer>
  );
};

export default DiaryProfileCp;

const MoreContentProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    width: 100%;
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
  font-size: 20px;
  color: #808080;
  line-height: 50px;
`;
