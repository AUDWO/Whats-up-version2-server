import styled from "styled-components";
import { GetContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import { useNavigate } from "react-router-dom";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import PostImgProfileCp from "./PostImgProfileCp";
//import handleLinkToProfilePage from "@/utils/post/handleLinkToProfilePage";

interface Props {
  img: string;
  userInfo: GetContentUserInfo;
}
const PostContentInfoCp = ({ img, userInfo }: Props) => {
  const navigate = useNavigate();
  const { data: myInfo, isLoading } = myInfoQuery();
  const { nickname, id: userId, img: profileImg } = userInfo;

  //const handle

  const handleLinkToProfilePage = (userId: number) => {
    const isMyPost = myInfo?.id === userId && myInfo?.loginCheck && !isLoading;
    if (isMyPost) {
      navigate(`/profile/my`);
    } else {
      navigate(`/profile/other/${userId}`);
    }
  };

  return (
    <PostContentInfoContainer>
      <PostImgSpace></PostImgSpace>
      <PostImgProfileCp userInfo={userInfo} />
      <PostImg src={img} />
    </PostContentInfoContainer>
  );
};

export default PostContentInfoCp;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  @media screen and (max-width: 421px) {
    width: 95%;
    height: auto;
  }
`;

const PostImgSpace = styled.div`
  @media screen and (max-width: 421px) {
    width: 100%;
    padding-bottom: 135%;
  }
`;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px;
  background-color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  object-fit: cover;
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
