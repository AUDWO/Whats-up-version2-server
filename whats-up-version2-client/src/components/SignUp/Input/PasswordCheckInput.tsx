import userSignInfo from "@/store/userSignInfo";
import { Label, Input, Requests } from "@/styledComponents/sign/signStyles";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const PasswordCheckInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);
  const [passwordCheckIsFocused, setPasswordCheckIsFocused] = useState(false);

  const equalState = userSignState.password === userSignState.passwordCheck;

  useEffect(() => {
    if (equalState) {
      setUserSignState((prev) => ({ ...prev, passwordPassCheck: true }));
    }
  }, [userSignState.passwordCheck]);
  return (
    <Label>
      password-check
      <Input
        placeholder="비밀번호 확인"
        type="password"
        value={userSignState.passwordCheck}
        onFocus={() => {
          setPasswordCheckIsFocused(true);
        }}
        onChange={(e) => {
          setUserSignState({ ...userSignState, passwordCheck: e.target.value });
        }}
      />
      {passwordCheckIsFocused && !equalState && (
        <Requests>비밀번호가 일치하지 않습니다!</Requests>
      )}
    </Label>
  );
};

export default PasswordCheckInput;
