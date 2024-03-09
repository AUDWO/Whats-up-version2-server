import styled from "styled-components";

interface Props {
  commentCount: number;
}

const MoreCommentCountCp = ({ commentCount }: Props) => {
  return (
    <MoreCommentCountWrapper>
      <MoreCommentCountTitle>댓글</MoreCommentCountTitle>
      <MoreCommentCountNumber>{commentCount}</MoreCommentCountNumber>
    </MoreCommentCountWrapper>
  );
};

export default MoreCommentCountCp;

const MoreCommentCountTitle = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

const MoreCommentCountWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const MoreCommentCountNumber = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;
