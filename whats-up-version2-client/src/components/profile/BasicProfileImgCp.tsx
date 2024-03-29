import styled from "styled-components";
import { FaUser } from "react-icons/fa";
interface Props {
  width: string;
  padding?: string;
  onClick?: () => void;
}

const BasicProfileImgCp = ({
  width,
  padding = "0",
  onClick = () => {},
}: Props) => {
  return <BasicProfileImg width={width} padding={padding} onClick={onClick} />;
};

export default BasicProfileImgCp;

const BasicProfileImg = styled(FaUser)<{ padding: string }>`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: 50%;
  color: ${(props) => props.theme.color.sub};
  color: black;
  background-color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.subBgColor};
`;
