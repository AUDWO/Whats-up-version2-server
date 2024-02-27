import styled from "styled-components";

const DiaryTitleCp = () => {
  return (
    <DiaryTitleWrapper>
      <DiaryTitleText>TITLE :</DiaryTitleText>
      리버풀 4대0 대승으로 승점 3점 확보! 리버풀 4대0 대승으로 승점 3점
      확보!wdwdwdw 확보!wdwdwdw
    </DiaryTitleWrapper>
  );
};

export default DiaryTitleCp;

const DiaryTitleWrapper = styled.div`
  padding: 5px 10px 8px 10px;
  width: 560px;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DiaryTitleText = styled.span`
  color: gray;
  font-size: 20px;
  margin-right: 10px;
`;
