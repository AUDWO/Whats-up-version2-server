import styled from "styled-components";

interface Props {
  content: string;
}

const DiaryContentCp = ({ content }: Props) => {
  return (
    <MoreContentTextContainer>
      <MoreContentText>{content}</MoreContentText>
    </MoreContentTextContainer>
  );
};

export default DiaryContentCp;

const MoreContentTextContainer = styled.div`
  width: 520px;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
  margin-bottom: 20px;
`;

const MoreContentText = styled.div`
  line-height: 150%;
  color: #767676;
`;
