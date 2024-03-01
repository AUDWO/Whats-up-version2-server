import { MutableRefObject } from "react";

const moveScroll = (
  direction: string,
  ref: MutableRefObject<HTMLDivElement>
) => {
  if (ref.current && direction === "left") {
    ref.current.scrollLeft -= 120;
  }
  if (ref.current && direction === "right") {
    ref.current.scrollLeft += 120;
  }
};

export default moveScroll;
