import styled from "styled-components";

import MorePostProfileCp from "@components/modals/morePost/MorePostProfileCp";
import MorePostContentCp from "@components/modals/morePost/MorePostContentCp";
import MorePostCommentsCp from "@components/modals/morePost/MorePostCommentsCp";
import MorePostCommentInputCp from "@components/modals/morePost/MorePostCommentInputCp";
import useModal from "@/customHooks/useModal";
import { CloseIcon } from "@components/icons/CloseIcon";
import ModalBackgroundCp from "./ModalBackgroundCp";

import { useRecoilValue } from "recoil";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getOnlyPost } from "@/apis/postApis/getApis";
import { getComments } from "@/apis/comment/getApis";
import morePostMdIdAtom from "@/store/getContentState/morePostMdIdState";

const PostCommentMd = () => {
  const { onClose } = useModal("postCommentMd");
  const postId = useRecoilValue(morePostMdIdAtom);
  /*
  const results = useQueries({
    queries: [
      {
        queryKey: [`post-$${postId}`],
        queryFn: () => getOnlyPost(postId),
        staleTime: Infinity,
      },
      {
        queryKey: [`postComments-${postId}`],
        queryFn: () => getComments(postId, "post"),
        staleTime: Infinity,
      },
    ],
  });*/

  const { data: postInfo } = useQuery({
    queryKey: [`postInfo-${postId}`],
    queryFn: () => getOnlyPost(postId),
  });

  return (
    <ModalBackgroundCp atomKey="postCommentMd">
      <MorePostContainer>
        <MorePostMdCloseButton onClick={onClose} />
        <MorePostWrapper>
          <MorePostImgWrapper>
            <MorePostImg
              src={
                "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
              }
            />
          </MorePostImgWrapper>
          <MorePostInfoContainer>
            <MorePostProfileCp userInfo={postInfo!.userInfo} />
            <MorePostContentCp
              userInfo={postInfo!.userInfo}
              subContent={postInfo!.subContent}
            />
            <MorePostCommentsCp postId={postId} />
            <MorePostCommentInputCp postId={postId} />
          </MorePostInfoContainer>
        </MorePostWrapper>
      </MorePostContainer>
    </ModalBackgroundCp>
  );
};

export default PostCommentMd;

const MorePostMdCloseButton = styled(CloseIcon)`
  position: absolute;
  top: -5%;
  right: 0%;
  font-size: 25px;
`;

const MorePostContainer = styled.div`
  width: 800px;
  height: 580px;
  z-index: 999;
  background-color: white;
  opacity: 1;
  display: flex;
  position: relative;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    display: block;
    height: 85vh;
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const MorePostWrapper = styled.div`
  width: 800px;
  height: 580px;
  z-index: 999;
  display: flex;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    display: block;
    height: 85vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 400px;
  }
`;
const MorePostImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  position: relative;
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
`;
const MorePostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 0px 0px 5px;
  @media screen and (max-width: 800px) {
    display: block;
    border-radius: 5px 5px 0px 0px;
    width: 100%;
  }
`;

const MorePostInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.subBgColor};
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;
