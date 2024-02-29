import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import "./SignInFormCp.css";

import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postSignIn } from "@/apis/authApis";
import { useNavigate } from "react-router-dom";
import userSignInfo from "@/store/userSignInfo";

const LoginFormCp = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({ ...prev, password: e.target.value }));
  };

  const { mutate: handleSignIn } = useCustomMutation(postSignIn, [], (data) => {
    console.log(data, "SignInResponse");
    if (data === "discord") {
      alert("로그인 또는 비밀번호가 일치하지 않습니다.");
      return;
    } else {
      navigate("/");
      setSignInForm({ email: "", password: "" });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signInForm.email.length < 1) {
      alert("이메일을 입력해주세요!");
      return;
    } else if (signInForm.password.length < 1) {
      alert("비밀번호를 입력해주세요!");
      return;
    } else {
      handleSignIn({
        ...signInForm,
      });
    }
  };

  return (
    <LoginFormContainer>
      <form className="sign-in_form" onSubmit={handleSubmit}>
        <Label>
          email
          <Input
            placeholder="이메일"
            type="email"
            onChange={handleEmailChange}
          />
        </Label>
        <Label>
          password
          <Input
            placeholder="비밀번호"
            type="password"
            onChange={handlePasswordChange}
          />
        </Label>
        <LoginButton type="submit">로그인</LoginButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginFormCp;

const LoginFormContainer = styled.div``;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #acacac;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  padding-left: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.main};
  }
`;

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
