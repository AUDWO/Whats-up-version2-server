import styled from "styled-components";
import CheckUserContentsInfoCp from "./CheckUserContentsInfoCp";
import CheckUserUtilCp from "./CheckUserUtilCp";
import CheckUserProfileCp from "./CheckUserProfileCp";
import { GetUserForm } from "@/types/userTypes";

interface Props {
  myInfo: GetUserForm;
}
const CheckUserRCp = ({ myInfo }: Props) => {
  return (
    <CheckUserContainer>
      <CheckUserProfileCp myInfo={myInfo} />
      <CheckUserContentsInfoCp />
      <CheckUserUtilCp />
    </CheckUserContainer>
  );
};

export default CheckUserRCp;

const CheckUserContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 70px;
  background-color: ${(props) => props.theme.bgColor};
`;
