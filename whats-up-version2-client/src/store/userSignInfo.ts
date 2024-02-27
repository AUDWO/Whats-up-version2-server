import { atom } from "recoil";

const userSignInfo = atom({
  key: "userSignInfo",
  default: {
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
    emailPassCheck: false,
    nicknamePassCheck: false,
    passwordPassCheck: false,
  },
});

export default userSignInfo;
