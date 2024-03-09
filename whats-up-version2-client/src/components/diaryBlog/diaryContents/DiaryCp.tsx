import { GetDiaryForm } from "@/types/contentTypes";
import dateFormKorean from "@/utils/date/dateFormKorean";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import styled from "styled-components";
interface Props {
  diaryInfo: GetDiaryForm;
}
const DiaryCp = ({ diaryInfo }: Props) => {
  const { title, createdAt, commentCount, User, img } = diaryInfo;
  return (
    <DiaryContentContainer>
      <DiaryContentWrapper>
        <DiaryContentImg src={img} />
        <DiaryContentInfoContainer>
          <DiaryContentInfoWrapper>
            <DiaryTitleText>{title}</DiaryTitleText>
            <DiaryInfoWrapper>
              <DiaryContentCreatedAtText>
                {dateFormKorean(createdAt)}
              </DiaryContentCreatedAtText>
              <DiaryCommentCountTitle>
                {commentCount}개의 댓글
              </DiaryCommentCountTitle>
            </DiaryInfoWrapper>
          </DiaryContentInfoWrapper>
          <DiaryContentProfileWrapper>
            {User.img ? (
              <DiaryContentProfileImg />
            ) : (
              <BasicProfileImgCp width="27px" />
            )}
            <DiaryContentProfileName>{User.nickname}</DiaryContentProfileName>
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
  @media screen and (max-width: 750px) {
    width: 450px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const DiarySpace = styled.div`
  display: none;
  @media screen and (max-width);
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
`;

const DiaryContentProfileName = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin-left: 10px;
`;
