import styled from "styled-components";
import "./SignInPage.css";
import { Link } from "react-router-dom";
import MainIcon from "@components/icons/MainIcon";
import LoginFormCp from "@components/signIn/SignInFormCp";
const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignInContainer>
        <header className="sign-in_header">
          <MainIcon fontSize="70px" />
          <MainName>
            WHAT<span className="main-title_otherColor">'</span>S UP
          </MainName>
        </header>
        <GoToSignUpPageText>
          회원이 아니신가요?
          <StyledLink to={"/sign-up"}>
            <span className="sign-up_redirect">회원가입 하기</span>
          </StyledLink>
        </GoToSignUpPageText>
        <LoginFormCp />
      </SignInContainer>
    </SignInPageContainer>
  );
};

export default SignInPage;

const SignInPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainName = styled.div`
  font-size: 40px;
  font-family: ${(props) => props.theme.common.fontFamily};
  color: ${(props) => props.theme.color.main};
  margin-top: 30px;
`;

const GoToSignUpPageText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  color: inherit; // 글씨 색상을 상위 요소와 동일하게 설정
  text-decoration: none; // 밑줄 제거
`;
