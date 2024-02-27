import { atom } from "recoil";

const storyInfo = atom({
  key: "storyInfo",
  default: {
    img: "",
    content: "",
  },
});

export default storyInfo;
