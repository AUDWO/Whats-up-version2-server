import { ContentUser } from "@/types/userTypes";
import styled from "styled-components";
interface Props {
  userInfo: ContentUser;
}
const StoryProfileCp = ({ userInfo }: Props) => {
  return (
    <MoreContentProfileContainer>
      <MoreContentProfileImg
        src={
          "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
        }
      />
      <MoreContentProfileName>Peter_099</MoreContentProfileName>
    </MoreContentProfileContainer>
  );
};

export default StoryProfileCp;

const MoreContentProfileContainer = styled.div`
  display: flex;
  width: 560px;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  object-fit: cover;
`;

const MoreContentProfileName = styled.span`
  font-weigt: 600;
  margin-left: 10px;
  height: 20px;
  margin-top: 10px;
  color: ${(props) => props.theme.fontColor};
`;
