import styled from "styled-components";

interface Props {
  title: string;
}
const DiaryTitleCp = ({ title }: Props) => {
  return (
    <DiaryTitleWrapper>
      <DiaryTitleText>TITLE :</DiaryTitleText>
      {title}
    </DiaryTitleWrapper>
  );
};

export default DiaryTitleCp;

const DiaryTitleWrapper = styled.div`
  padding: 5px 10px 8px 10px;
  font-size: 20px;
  width: 100%;
`;

const DiaryTitleText = styled.span`
  color: gray;
  font-size: 20px;
  margin-right: 10px;
`;
