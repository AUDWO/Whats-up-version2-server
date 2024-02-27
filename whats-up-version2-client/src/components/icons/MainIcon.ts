import styled from "styled-components";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const MainIcon = styled(BsFillEmojiSmileFill)<{ fontSize?: string }>`
  font-size: 50px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "50px")};
  color: #f7dd07;
  border-radius: 50%;
  background-color: #4099ff;
`;

export default MainIcon;
