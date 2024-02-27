import styled from "styled-components";

const CheckUserContentsInfoCp = () => {
  return (
    <CheckUserContentContainer>
      <ContentsCountWrapper>
        <ContentCountTitle>게시물 -</ContentCountTitle>
        <ContentCountNumber>0</ContentCountNumber>
      </ContentsCountWrapper>
      <ContentsCountWrapper>
        <ContentCountTitle>일기 -</ContentCountTitle>
        <ContentCountNumber>0</ContentCountNumber>
      </ContentsCountWrapper>
    </CheckUserContentContainer>
  );
};

export default CheckUserContentsInfoCp;

const CheckUserContentContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ContentsCountWrapper = styled.div`
  display: flex;
  margin-right: 40px;
`;

const ContentCountTitle = styled.div`
  margin-right: 7px;
  color: ${(props) => props.theme.fontColor};
`;

const ContentCountNumber = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
