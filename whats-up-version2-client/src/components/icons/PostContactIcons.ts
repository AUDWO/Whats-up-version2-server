import styled from "styled-components";
//heartNotFill
import { FaRegHeart } from "react-icons/fa6";

//comment
import { FaRegComment } from "react-icons/fa";

const PostContactIconFontSize = "23px";

export const PostLikeIcon = styled(FaRegHeart)`
  padding: 0;
  font-size: ${PostContactIconFontSize};
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;

export const PostCommentIcon = styled(FaRegComment)`
  padding: 0;
  font-size: ${PostContactIconFontSize};
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;
