import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";
import postInfo from "@/store/postContentState/postInfoState";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postPost } from "@/apis/postApis/postApis";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import useModal from "@/customHooks/useModal";
import toggleState from "@/store/toggleState";

const MakePostButtonCp = () => {
  const [postInfoState, setPostInfoState] = useRecoilState(postInfo);
  const resetPostInfo = useResetRecoilState(postInfo);

  const postAllowLikeState = useRecoilValue(toggleState("postAllowLike"));
  const postAllowComment = useRecoilValue(toggleState("postAllowComment"));
  const postAllowSubContent = useRecoilValue(
    toggleState("postAllowSubContent")
  );

  const { mutate: createPost } = useCustomMutation(postPost);
  const { onClose } = useModal("makePostMd");

  const onResetPostInfo = () => {
    resetPostInfo();
    onClose();
  };

  const handleCreatePost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    createPost({
      img: postInfoState.img,
      subContent: postInfoState.subContent,
      mainContent: postInfoState.mainContent,
      allowComment: postAllowComment,
      allowSubcontent: postAllowSubContent,
      allowLike: postAllowLikeState,
    });
  };

  return (
    <MakePostButtonWrapper>
      <ButtonCp onClick={handleCreatePost}>게시</ButtonCp>
      <ButtonCp backColor="#ed4956" onClick={onResetPostInfo}>
        삭제
      </ButtonCp>
    </MakePostButtonWrapper>
  );
};

export default MakePostButtonCp;

const MakePostButtonWrapper = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
`;
