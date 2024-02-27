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

  const [nicknamePassCondition, setNicknamePassCondition] = useState({
    isFocused: false,
    pass: false,
    click: false,
  });

  const { data: nicknameOverlapCheck, isLoading } = useQuery({
    queryKey: ["nicknameCheck", userSignState.nickname],
    queryFn: () => getNicknameCheck(userSignState.nickname),
    enabled: nicknamePassCondition.click,
  });

  useEffect(() => {
    if (
      nicknameOverlapCheck &&
      checkUserInfoForm("nickname", userSignState.nickname)
    ) {
      setNicknamePassCondition((prev) => ({ ...prev, pass: true }));
      setUserSignState((prev) => ({ ...prev, nicknamePassCheck: true }));
    }
  }, [nicknameOverlapCheck]);

  const handleQueryTriggerClick = () => {
    setNicknamePassCondition((prev) => ({ ...prev, click: true }));
  };

  const handleResetNicknamePass = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState({ ...userSignState, nickname: e.target.value });
    setNicknamePassCondition((prev) => ({
      ...prev,
      pass: false,
      click: false,
    }));
  };

  const handleFocus = () => {
    setNicknamePassCondition((prev) => ({ ...prev, isFocused: true }));
  };

  const handleBlur = () => {
    setNicknamePassCondition((prev) => ({
      ...prev,
      isFocused: false,
      click: false,
    }));
  };

  const nicknameRequestMessage = nicknamePassCondition.pass ? (
    <Satisfied>사용 가능한 닉네임 입니다!</Satisfied>
  ) : (
    <Requests>사용 불가능한 닉네임 입니다!</Requests>
  );
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
          handleResetNicknamePass(e);
        }}
      />
      {!isLoading && nicknamePassCondition.pass ? (
        <SatisfiedIcon />
      ) : (
        <CheckUserIcon onClick={handleQueryTriggerClick} />
      )}
      {!nicknamePassCondition.click && nicknamePassCondition.isFocused && (
        <Requests>사용 가능한 닉네임인지 확인해주세요!(최대 15자)</Requests>
      )}
      {!isLoading &&
        !nicknamePassCondition.isFocused &&
        nicknamePassCondition.click &&
        nicknameRequestMessage}
    </Label>
  );
};

export default NicknameInput;
