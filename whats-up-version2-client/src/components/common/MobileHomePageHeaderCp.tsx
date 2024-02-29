import styled from "styled-components";
import MainIcon from "@components/icons/MainIcon";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";
import { useNavigate } from "react-router-dom";

const MobileHomePageHeaderCp = () => {
  const { data: myInfo } = myInfoQuery();
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/sign-in");
  };

  return (
    <HomePageHeader>
      <HeaderIconWrapper>
        <MainIcon />
        <HeaderTitle>WHAT'S UP</HeaderTitle>
      </HeaderIconWrapper>
      <LoginWrapper>
        {!myInfo?.loginCheck && (
          <LoginButton onClick={onClickButton}>login</LoginButton>
        )}
      </LoginWrapper>
    </HomePageHeader>
  );
};

export default MobileHomePageHeaderCp;

const LoginWrapper = styled.div`
  margin-right: 20px;
`;

const LoginButton = styled.button`
  background-color: none;
  border: none;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 16px;
  font-family: Orbitron;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.main};
  }
`;

const HomePageHeader = styled.div`
  display: none;
  padding:10px; 20px;
  @media screen and (max-width: 500px) {
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-family: Orbitron;
  font-size: 25px;
  color: #f7dd07;
  margin-left: 10px;
`;
