import styled from "styled-components";
import RecommendUsersRCp from "./recommend/RecommendUsersRCp";
import NoUserRCp from "./noUser/NoUserRCp";
import CheckUserRCp from "./checkUser/CheckUserRCp";
import { GetUserForm } from "@/types/userTypes";

interface Props {
  myInfo: GetUserForm | { loginCheck: boolean };
}

const SubSideNavRCp = ({ myInfo }: Props) => {
  return (
    <SubSideNavContainer>
      {myInfo.loginCheck ? (
        <CheckUserRCp myInfo={myInfo as GetUserForm} />
      ) : (
        <NoUserRCp />
      )}
      <RecommendUsersRCp />
    </SubSideNavContainer>
  );
};

export default SubSideNavRCp;

const SubSideNavContainer = styled.nav`
  width: 320px;
  height: 100vh;
  position: absolute;
  right: 0;
  padding-left: 20px;
  @media screen and (max-width: 1160px) {
    display: none;
  }
`;
