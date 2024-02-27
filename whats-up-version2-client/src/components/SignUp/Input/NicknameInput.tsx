import { useRecoilState } from "recoil";
import userSignInfo from "@/store/userSignInfo";
import { ChangeEvent, useEffect, useState } from "react";
import checkUserInfoForm from "@/utils/sign/checkUserInfoForm";
import { useQuery } from "@tanstack/react-query";
import { getNicknameCheck } from "@/apis/authApis";

import {
  Label,
  Input,
  CheckUserIcon,
  Requests,
  Satisfied,
  SatisfiedIcon,
} from "@/styledComponents/sign/signStyles";
const NicknameInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);
  //const [prevNicknameChecking, setPrevNicknameChecking] = useState(false);
  //const [nicknameInputIsFocused, setNicknameInputIsFocused] = useState(false);
  //const [nicknamePassChecking, setNickNamePassChecking] = useState(false);

  const [nicknameCheck, setNicknameCheck] = useState({
    isFocused: false,
    pass: false,
    click: false,
  });

  const { data: nicknameOverlapCheck, isLoading } = useQuery({
    queryKey: ["nicknameCheck", userSignState.nickname],
    queryFn: () => getNicknameCheck(userSignState.nickname),
    enabled: nicknameCheck.click,
  });

  useEffect(() => {
    if (nicknameOverlapCheck && nicknameCheck.pass) {
      setUserSignState((prev) => ({ ...prev, nicknamePassCheck: true }));
    }
  }, [nicknameOverlapCheck]);

  const handleNicknameValidationCheck = () => {
    if (checkUserInfoForm("nickname", userSignState.nickname)) {
      //setNickNamePassChecking(true);
      setNicknameCheck((prev) => ({ ...prev, pass: true }));
    }
    setNicknameCheck((prev) => ({ ...prev, click: true }));
  };

  const handleResetNicknameChecking = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState({ ...userSignState, nickname: e.target.value });
    setNicknameCheck((prev) => ({ ...prev, pass: false }));
  };

  const nicknameRequestMessage = nicknameCheck.pass ? (
    <Satisfied>사용 가능한 닉네임 입니다!</Satisfied>
  ) : (
    <Requests>사용 불가능한 닉네임 입니다!</Requests>
  );

  const handleFocus = () => {
    //setNicknameInputIsFocused(true);
    setNicknameCheck((prev) => ({ ...prev, isFocused: true }));
  };

  const handleBlur = () => {
    // setNicknameInputIsFocused(false);
    //setPrevNicknameChecking(false);
    setNicknameCheck((prev) => ({ ...prev, isFocused: false, click: false }));
  };

  return (
    <Label>
      nickName
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="닉네임"
        type="text"
        value={userSignState.nickname}
        onChange={(e) => {
          handleResetNicknameChecking(e);
        }}
      />
      {!isLoading && nicknameCheck.pass ? (
        <SatisfiedIcon />
      ) : (
        <CheckUserIcon onClick={handleNicknameValidationCheck} />
      )}
      {!nicknameCheck.click && nicknameCheck.isFocused && (
        <Requests>사용 가능한 닉네임인지 확인해주세요!(최대 15자)</Requests>
      )}
      {!isLoading &&
        nicknameCheck.click &&
        !nicknameCheck.isFocused &&
        nicknameOverlapCheck &&
        nicknameRequestMessage}
    </Label>
  );
};

export default NicknameInput;
