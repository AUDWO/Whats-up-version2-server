import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2Cp";
const PostContentInfoCp = () => {
  return (
    <PostContentInfoContainer>
      <PostImg />
      <PostContactV2Cp />
      <PostContentWrapper>
        <PostContent>
          <PostContentProfileName>myeon+jae</PostContentProfileName>
          어느날의 퇴근길 풍경입니다:) 며칠 전에 같이 퇴근을 하는데, 앞에 타고
          계시는 부장님과 동호PD가 사이가 너~무 좋은게 아니겠어요??!!!❤️
          엄마미소를 지으며 보다가 부랴부랴 사진으로 남겨 놓았는데 사진으로는
          즐거웠던 분위기가 전달이 안되는거 같네요;; 허허허허 그렇지만!!!!
          퇴근길 공유 해 봅니다. 월요일 오후시간, 퇴근 생각이 간절하실 우리
          사원님들!!!! 이번한주도 함께 화이팅해요!!!!!!!!!!☺️✨
        </PostContent>
      </PostContentWrapper>
    </PostContentInfoContainer>
  );
};

export default PostContentInfoCp;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px 8px 0px 0px;
  background-color: black;
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  object-fit: cover;
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 81%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    position: relative;
    padding-bottom: 166.1%;
  }
`;

const PostContentWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;

  background-color: ${(props) => props.theme.backColor};

  display: flex;
  algin-items: center;
  padding-top: 15px;

  @media screen and (max-width: 501px) {
    width: 420px;
    border-top: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PostContentProfileName = styled.span`
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const PostContent = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  line-height: 140%;
`;
