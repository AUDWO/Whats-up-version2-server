import styled from "styled-components";
//NotFillLike
import { FaRegHeart } from "react-icons/fa6";
//fillLike
import { FaHeart } from "react-icons/fa";

//comment
import { FaRegComment } from "react-icons/fa";

const PostContactIconFontSize = "23px";

export const PostLikeIcon = styled(FaRegHeart)`
  padding: 0;
  font-size: ${PostContactIconFontSize};
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.color.main};
  }
`;

export const PostFillLikeIcon = styled(FaHeart)`
  padding: 0;
  font-size: ${PostContactIconFontSize};
  margin-right: 10px;
  color: ${(props) => props.theme.color.main};
  &:hover {
    color: #f2ce16;
  }
`;

export const PostCommentIcon = styled(FaRegComment)`
  padding: 0;
  font-size: ${PostContactIconFontSize};
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.color.main};
  }
`;
