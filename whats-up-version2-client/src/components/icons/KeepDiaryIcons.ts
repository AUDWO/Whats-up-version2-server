import styled from "styled-components";

//imageIcon
import { AiFillPicture } from "react-icons/ai";

//plus
import { FaCirclePlus } from "react-icons/fa6";

export const DiarySelectImgIcon = styled(AiFillPicture)`
  color: #4199ff;
  position: absolute;
  z-index: 9;
  top: 0;
  margin: 0;
  font-size: 300px;
  cursor: pointer;
  @media screen and (max-width: 985px) {
    font-size: 200px;
  }
`;

export const PlusIcon = styled(FaCirclePlus)`
  color: #f7dd07;
  font-size: 60px;
  position: absolute;
  bottom: 10%;
  right: 4%;
  background-color: white;
  border-radius: 50%;
  z-index: 99;
  @media screen and (max-width: 985px) {
    font-size: 40px;
  }
`;
