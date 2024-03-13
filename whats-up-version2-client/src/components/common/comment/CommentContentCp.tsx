import styled from "styled-components";

interface Props {
  nickname: string;
  content: string;
}

const CommentContentCp = ({ nickname, content }: Props) => {
  return (
    <CommentContentContainer>
      <CommentProfileName>{nickname}</CommentProfileName>
      <CommentContent>{content}</CommentContent>
    </CommentContentContainer>
  );
};

export default CommentContentCp;

const CommentProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
`;

const CommentContentContainer = styled.div`
  height: 100%;
  margin-left: 10px;
  margin-top: 7px;
  flex: 1;
`;

const CommentContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
  color: ${(props) => props.theme.fontColor};
`;
