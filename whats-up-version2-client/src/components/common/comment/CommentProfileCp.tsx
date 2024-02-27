import styled from "styled-components";

const CommentProfileCp = () => {
  return (
    <CommentProfileImgWrapper>
      <CommentProfileImg />
    </CommentProfileImgWrapper>
  );
};

export default CommentProfileCp;

const CommentProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;

const CommentProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
