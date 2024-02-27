import styled from "styled-components";
const DiaryContentCp = () => {
  return (
    <MoreContentTextContainer>
      <MoreContentText>
        어느날의 퇴근길 풍경입니다:) 며칠 전에 같이 퇴근을 하는데, 앞에 타고
        계시는 부장님과 동호PD가 사이가 너~무 좋은게 아니겠어요??!!!❤️
        엄마미소를 지으며 보다가 부랴부랴 사진으로 남겨 놓았는데 사진으로는
        즐거웠던 분위기가 전달이 안되는거 같네요;; 허허허허 그렇지만!!!! 퇴근길
        공유 해 봅니다. 월요일 오후시간, 퇴근 생각이 간절하실 우리 사원님들!!!!
        이번한주도 함께 화이팅해요!!!!!!!!!!☺️✨
      </MoreContentText>
    </MoreContentTextContainer>
  );
};

export default DiaryContentCp;

const MoreContentTextContainer = styled.div`
  width: 560px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentText = styled.div`
  line-height: 150%;
  color: #767676;
`;
