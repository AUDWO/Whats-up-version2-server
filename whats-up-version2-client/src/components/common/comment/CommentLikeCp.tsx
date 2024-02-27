import styled from "styled-components";

import { CommentLikeIcon } from "@components/icons/CommentLikeIcon";

const CommentLikeCp = () => {
  return (
    <CommnetLikeIconWrapper>
      <CommentLikeIcon />
    </CommnetLikeIconWrapper>
  );
};

export default CommentLikeCp;

const CommnetLikeIconWrapper = styled.div`
  padding-top: 5px;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
`;
