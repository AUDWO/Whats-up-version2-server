import { atom } from "recoil";

const postInfo = atom({
  key: "postInfo",
  default: {
    mainContent: "",
    subContent: "",
    img: "",
  },
});

export default postInfo;
