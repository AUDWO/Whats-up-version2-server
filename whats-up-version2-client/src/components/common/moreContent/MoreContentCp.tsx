import styled from "styled-components";
interface Props {
  content: string;
}
const MoreContentCp = ({ content }: Props) => {
  return (
    <MoreContentTextContainer>
      <MoreContentText>{content}</MoreContentText>
    </MoreContentTextContainer>
  );
};

export default MoreContentCp;

const MoreContentTextContainer = styled.div`
  width: 560px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentText = styled.div`
  line-height: 150%;
  color: #767676;
  color: ${(props) => props.theme.fontColor};
`;
