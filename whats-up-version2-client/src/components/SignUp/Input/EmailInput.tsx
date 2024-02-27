import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import userSignInfo from "@/store/userSignInfo";
import checkUserInfoForm from "@/utils/sign/checkUserInfoForm";

import { LoginCheck } from "@/types/authTypes";
import { getEmailCheck } from "@/apis/authApis";

import {
  Label,
  Input,
  CheckUserIcon,
  Satisfied,
  SatisfiedIcon,
  Requests,
} from "@/styledComponents/sign/signStyles";

const EmailInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);

  const [emailPassCondition, setEmailPassCondition] = useState({
    isFocused: false,
    pass: false,
    click: false,
  });

  const { data: emailOverlapCheck, isLoading } = useQuery<LoginCheck>({
    queryKey: ["emailOverlapCheck", userSignState.email],
    queryFn: () => getEmailCheck(userSignState.email),
    enabled: emailPassCondition.click,
  });

  useEffect(() => {
    if (checkUserInfoForm("email", userSignState.email) && emailOverlapCheck) {
      setUserSignState((prev) => ({ ...prev, emailPassCheck: true }));
      setEmailPassCondition((prev) => ({ ...prev, pass: true }));
    }
  }, [emailOverlapCheck]);

  const handleQueryTriggerClick = () => {
    setEmailPassCondition((prev) => ({ ...prev, click: true }));
  };

  const handleResetEmailPass = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState({ ...userSignState, email: e.target.value });
    setEmailPassCondition((prev) => ({ ...prev, pass: false, click: false }));
  };

  const handleBlur = () => {
    setEmailPassCondition((prev) => ({
      ...prev,
      click: false,
      isFocused: false,
    }));
  };

  const handleFocus = () => {
    setEmailPassCondition((prev) => ({ ...prev, isFocused: true }));
  };

  const emailRequestMessage = emailPassCondition.pass ? (
    <Satisfied>사용 가능한 이메일 입니다!</Satisfied>
  ) : (
    <Requests>사용 불가능한 이메일 입니다!</Requests>
  );

  return (
    <Label>
      email
      <Input
        placeholder="이메일"
        type="email"
        value={userSignState.email}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          handleResetEmailPass(e);
        }}
      />
      {emailPassCondition.isFocused && !emailPassCondition.pass && (
        <Requests>사용 가능한 이메일인지 확인해주세요!</Requests>
      )}
      {isLoading && <N />}
      {!isLoading && emailPassCondition.pass ? (
        <SatisfiedIcon />
      ) : (
        <CheckUserIcon onClick={handleQueryTriggerClick} />
      )}
      {!isLoading &&
        !emailPassCondition.isFocused &&
        emailPassCondition.click &&
        emailRequestMessage}
    </Label>
  );
};

export default EmailInput;

const N = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  right: 2%;
  top: 35%;
`;
