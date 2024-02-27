import { atom } from "recoil";

const diaryInfo = atom({
  key: "diaryInfo",
  default: {
    content: "",
    title: "",
    img: "",
    allowComment: false,
    allowLike: false,
    allowPublic: false,
  },
});

export default diaryInfo;
