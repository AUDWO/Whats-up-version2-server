import { atom } from "recoil";

const modalStore = atom({
  key: "modalStore",
  default: {
    postCommentMd: false,
    makePostMd: false,
    makeStoryMd: false,
    requestLoginMd: false,
    searchMd: false,
  },
});

export default modalStore;
