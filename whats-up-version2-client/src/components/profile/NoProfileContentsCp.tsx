import styled from "styled-components";

const NoProfileContentsCp = ({ contentType }: { contentType: boolean }) => {
  const content = contentType ? "diary" : "post";
  const noContentType = {
    diary: { main: "일기", sub: "일기가" },
    post: { main: "게시물", sub: "게시물이" },
  };
  return (
    <NoContentsContainer>
      <NoContentTextWrapper>
        <NoContentsMainText>
          {noContentType[content].main} 없음
        </NoContentsMainText>
        <NoContentSubText>
          아직 회원님이 {noContentType[content].sub} 존재하지 않습니다.
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
  height: 300px;
`;

const NoContentsMainText = styled.span`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const NoContentSubText = styled.div`
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
