import styled from "styled-components";

const NoProfileContentsCp = () => {
  const noContentType = {
    diary: { main: "일기", sub: "일기가" },
    post: { main: "게시물", sub: "게시물이" },
  };
  return (
    <NoContentsContainer>
      <NoContentTextWrapper>
        <NoContentsMainText>{noContentType.diary.main} 없음</NoContentsMainText>
        <NoContentSubText>
          아직 회원님이 {noContentType.diary.sub} 존재하지 않습니다.
        </NoContentSubText>
      </NoContentTextWrapper>
    </NoContentsContainer>
  );
};

export default NoProfileContentsCp;

const NoContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

const NoContentsMainText = styled.div`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
`;

const NoContentSubText = styled.div``;
