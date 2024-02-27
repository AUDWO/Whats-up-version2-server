import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";

const MakePostImgSelectorCp = () => {
  return (
    <PostImgSelectContainer>
      <PostImgSelectButtonWrapper>
        <PostImgDropDownText>
          이미지를 드래그하여 업로드하세요.
        </PostImgDropDownText>
        <ButtonCp fontSize="16px" backColor="">
          사진 선택
        </ButtonCp>
      </PostImgSelectButtonWrapper>
    </PostImgSelectContainer>
  );
};
export default MakePostImgSelectorCp;

const PostImgSelectButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.subBgColor};
`;
const PostImgSelectContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostImgDropDownText = styled.div`
  color: #b0b0b0;
  font-size: 20px;
  margin-bottom: 20px;
`;
