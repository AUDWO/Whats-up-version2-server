import { atomFamily } from "recoil";

const dependedModalOpenState = atomFamily({
  key: "modalOpen",
  default: false,
});

export default dependedModalOpenState;
