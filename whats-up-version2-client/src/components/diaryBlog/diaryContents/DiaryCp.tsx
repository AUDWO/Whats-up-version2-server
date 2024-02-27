import styled from "styled-components";

const DiaryCp = () => {
  return (
    <DiaryContentContainer>
      <DiaryContentWrapper>
        <DiaryContentImg
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SV100408.JPG/1200px-SV100408.JPG"
          }
        />
        <DiaryContentInfoContainer>
          <DiaryContentInfoWrapper>
            <DiaryTitleText>우리들은 엔지니어이다.</DiaryTitleText>
            <DiaryInfoWrapper>
              <DiaryContentCreatedAtText>
                2024년 2월 21일
              </DiaryContentCreatedAtText>
              <DiaryCommentCountTitle>14개의 댓글</DiaryCommentCountTitle>
            </DiaryInfoWrapper>
          </DiaryContentInfoWrapper>
          <DiaryContentProfileWrapper>
            <DiaryContentProfileImg />
            <DiaryContentProfileName>peter_09</DiaryContentProfileName>
          </DiaryContentProfileWrapper>
        </DiaryContentInfoContainer>
      </DiaryContentWrapper>
    </DiaryContentContainer>
  );
};

export default DiaryCp;

const DiaryContentContainer = styled.div`
  background-color: orange;
  padding-bottom: 120%;
  position: relative;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
`;

const DiaryContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: white;
  background-color: ${(props) => props.theme.diaryBlogContentBgColor};
`;

const DiaryContentImg = styled.img`
  width: 100%;
  height: 60%;
  background-color: black;
  object-fit: cover;
  object-position: 50% 20%;
`;

const DiaryContentInfoContainer = styled.div`
  width: 100%;
  height: 40%;
`;

const DiaryContentInfoWrapper = styled.div`
  height: 55%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const DiaryContentCreatedAtText = styled.div`
  font-size: 14px;
  color: #a2a9ae;
  margin-bottom: 30px;
  padding: 0px 8px;
  margin-right: 5px;
`;

const DiaryCommentCountTitle = styled.div`
  font-size: 14px;
  color: #a2a9ae;
`;

const DiaryInfoWrapper = styled.div`
  display: flex;
`;
const DiaryTitleText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 0px 8px;
  margin-top: 20px;
  color: ${(props) => props.theme.fontColor};
`;

const DiaryContentProfileWrapper = styled.div`
  height: 29%;
  display: flex;
  align-items: center;
  padding: 4px 8px;
`;

const DiaryContentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const DiaryContentProfileName = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
