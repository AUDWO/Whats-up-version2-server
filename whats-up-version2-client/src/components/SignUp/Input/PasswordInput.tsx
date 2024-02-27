import { Label, Input, Requests } from "@/styledComponents/sign/signStyles";
import { useRecoilState } from "recoil";
import userSignInfo from "@/store/userSignInfo";
import { useState } from "react";
import checkUserInfoForm from "@/utils/sign/checkUserInfoForm";
const PasswordInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);

  return (
    <Label>
      password
      <Input
        placeholder="비밀번호"
        type="password"
        onFocus={() => {
          setPasswordIsFocused(true);
        }}
        value={userSignState.password}
        onChange={(e) => {
          setUserSignState({ ...userSignState, password: e.target.value });
        }}
      />
      {passwordIsFocused &&
        !checkUserInfoForm("password", userSignState.password) && (
          <Requests>
            비밀번호는 영문, 숫자, 특수기호 조합 8자 이상 입력해 주세요!
          </Requests>
        )}
    </Label>
  );
};

export default PasswordInput;
