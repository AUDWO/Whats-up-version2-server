import { atomFamily } from "recoil";

const toggleState = atomFamily({
  key: "toggle",
  default: false,
});

export default toggleState;
