import styled from "styled-components";
import "./SignInPage.css";
import { Link } from "react-router-dom";
import MainIcon from "@components/icons/MainIcon";
import SignUpFormCp from "@components/SignUp/SignUpFormCp";
const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <SignUpContainer>
        <header className="sign-in_header">
          <MainIcon fontSize="70px" />
          <MainName>
            WHAT<span className="main-title_otherColor">'</span>S UP
          </MainName>
        </header>
        <GoToSignInPageText>
          이미 회원이신가요?
          <StyledLink to={"/sign-in"}>
            <span className="sign-up_redirect">로그인 하기</span>
          </StyledLink>
        </GoToSignInPageText>
        <SignUpFormCp />
      </SignUpContainer>
    </SignUpPageContainer>
  );
};

export default SignUpPage;

const SignUpPageContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpContainer = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const MainName = styled.div`
  font-size: 40px;
  font-family: ${(props) => props.theme.common.fontFamily};
  color: ${(props) => props.theme.color.main};
  margin-top: 30px;
`;

const GoToSignInPageText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  color: inherit; // 글씨 색상을 상위 요소와 동일하게 설정
  text-decoration: none; // 밑줄 제거
`;
