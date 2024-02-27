import { atom } from "recoil";

const viewPortFixedState = atom({
  key: "viewPortFixed",
  default: false,
});

export default viewPortFixedState;
