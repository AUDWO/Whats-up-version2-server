import styled from "styled-components";

const MoreCommentCountCp = () => {
  return (
    <MoreCommentCountWrapper>
      <MoreCommentCountTitle>댓글</MoreCommentCountTitle>
      <MoreCommentCountNumber>7</MoreCommentCountNumber>
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
