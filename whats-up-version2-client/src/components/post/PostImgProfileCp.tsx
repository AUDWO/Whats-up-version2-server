import React from "react";
import { GetContentUserInfo, GetUserForm } from "@/types/userTypes";
import styled from "styled-components";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import { useNavigate } from "react-router-dom";

interface Props {
  userInfo: GetContentUserInfo;
}

const PostImgProfileCp = ({ userInfo }: Props) => {
  const { img: profileImg, nickname, id: userId } = userInfo;
  const navigate = useNavigate();

  const { data: myInfo, isLoading } = myInfoQuery();

  const handleLinkToProfilePage = (userId: number) => {
    const isMyPost = myInfo?.id === userId && myInfo?.loginCheck && !isLoading;
    if (isMyPost) {
      navigate(`/profile/my`);
    } else {
      navigate(`/profile/other/${userId}`);
    }
  };
  return (
    <PostProfileWrapper>
      {profileImg ? (
        <PostProfileImg
          src={profileImg}
          onClick={() => {
            handleLinkToProfilePage(userId);
          }}
        />
      ) : (
        <PostBasicProfileImg onClick={() => handleLinkToProfilePage(userId)}>
          <BasicProfileImgCp width="38px" padding="5px" />
        </PostBasicProfileImg>
      )}
      <PostProfileName onClick={() => handleLinkToProfilePage(userId)}>
        {nickname}
      </PostProfileName>
    </PostProfileWrapper>
  );
};

export default PostImgProfileCp;

const PostProfileWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 4%;
  left: 4%;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PostProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const PostBasicProfileImg = styled.div`
  border: 3px solid ${(props) => props.theme.color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.color.main};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  cursor: pointer;
`;

const PostProfileName = styled.span`
  font-size: 14px;
  font-weight: 800;
  padding: 6px 10px 6px 10px;
  background-color: white;
  border-radius: 14px;
  margin-left: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border: 3px solid ${(props) => props.theme.color.main};
  cursor: pointer;
`;
