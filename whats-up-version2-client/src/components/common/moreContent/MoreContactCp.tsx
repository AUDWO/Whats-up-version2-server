import styled from "styled-components";

import { RiHeart3Fill } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDiaryLikeInfo } from "@/apis/diaryApis/getApis";
import { postLike } from "@/apis/content/postApis";
import { PostLikeParams } from "@/types/contentTypes";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import useModal from "@/customHooks/useModal";

interface Props {
  likeInfo: {
    likeCount: number;
    likeStatus: boolean;
  };
  contentId: number;
  contentType: string;
}
const MoreContactCp = ({
  likeInfo: preLikeInfo,
  contentId,
  contentType,
}: Props) => {
  const { likeCount: preLikeCount, likeStatus: preLikeStatus } = preLikeInfo;

  const { data: likeInfo } = useQuery({
    queryKey: [`${contentType}-likeInfo-${contentId}`],
    queryFn: () => getDiaryLikeInfo(contentId),
  });

  const { data: myInfo } = myInfoQuery();

  const userNotLogin = !myInfo?.loginCheck;

  const { onOpen } = useModal("requestLoginMd");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (params: PostLikeParams) => postLike(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${contentType}-likeInfo-${contentId}`],
      });
    },
  });

  if (likeInfo) {
    console.log(likeInfo, "likeInfo likeInfo likeInfo likeInfo ");
  }
  const likeStatusData = likeInfo?.likeStatus || preLikeStatus;
  const likeCountData = likeInfo?.likeCount || preLikeCount;

  const handlePostLike = () => {
    if (userNotLogin) {
      onOpen();
      return;
    }
    mutate({
      contentId,
      likeAction: "like",
      contentType,
    });
  };

  const handlePostUnLike = () => {
    mutate({
      contentId,
      likeAction: "unLike",
      contentType,
    });
  };

  return (
    <ContactContainer>
      <ContactsWrapper>
        {likeStatusData ? (
          <DiaryLikedIcon onClick={handlePostUnLike} />
        ) : (
          <DiaryLikeIcon onClick={handlePostLike} />
        )}
        <LikeCount>{likeCountData}</LikeCount>
      </ContactsWrapper>
    </ContactContainer>
  );
};

export default MoreContactCp;

const LikeCount = styled.div`
  font-weight: 500;
  margin-left: 5px;
  font-size: 14px;
  padding-top: 3px;
`;

const DiaryLikedIcon = styled(RiHeart3Fill)`
  font-size: 30px;
  color: #f44336;
  cursor: pointer;
`;
const DiaryLikeIcon = styled(RiHeart3Fill)`
  font-size: 30px;
  cursor: pointer;
  color: ${(props) => props.theme.borderColor};
`;

const ContactContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;

const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Contact = styled.div`
  width: 80px;
  height: 35px;
  background-color: skyBlue;
  @media screen and (max-width: 470px) {
    width: 60px;
    height: 30px;
  }
`;
