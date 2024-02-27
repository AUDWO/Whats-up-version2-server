import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import EmailInput from "./Input/EmailInput";
import NicknameInput from "./Input/NicknameInput";
import PasswordInput from "./Input/PasswordInput";
import PasswordCheckInput from "./Input/PasswordCheckInput";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postSignUp } from "@/apis/authApis";
import userSignInfo from "@/store/userSignInfo";
import { useNavigate } from "react-router-dom";

const SignUpFormCp = () => {
  const { mutate: handleSignUp } = useCustomMutation(postSignUp);
  const navigate = useNavigate();
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);

  const signUpForm = {
    email: userSignState.email,
    nickname: userSignState.nickname,
    password: userSignState.password,
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.stopPropagation();

    const { emailPassCheck, nicknamePassCheck, passwordPassCheck } =
      userSignState;

    if (!emailPassCheck) {
      alert("사용 가능한 이메일인지 확인해주세요!");
    } else if (!nicknamePassCheck) {
      alert("사용 가능한 닉네임인지 확인해주세요!");
    } else if (!passwordPassCheck) {
      alert(
        "올바른 비밀번호인지, 비밀번호가 비밀번호 확인와 일치하는지 확인해주세요!"
      );
    } else {
      handleSignUp(signUpForm);
      alert("회원가입이 완료 되었습니다!.");
      navigate("/sign-in");
      setUserSignState({
        email: "",
        nickname: "",
        password: "",
        passwordCheck: "",
        emailPassCheck: false,
        nicknamePassCheck: false,
        passwordPassCheck: false,
      });
    }
  };

  return (
    <SignUpContainer>
      <form className="sign-in_form" onSubmit={handleCreateUser}>
        <EmailInput />
        <NicknameInput />
        <PasswordInput />
        <PasswordCheckInput />
        <LoginButton type="submit">회원가입</LoginButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpFormCp;

const SignUpContainer = styled.div``;

const LoginButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.color.main};
  color: white;
  font-weight: 500;
  margin-top: 40px;
  height: 40px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
`;
