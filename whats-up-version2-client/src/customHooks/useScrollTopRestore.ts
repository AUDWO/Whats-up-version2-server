import { MutableRefObject, useEffect } from "react";
const useScrollTopRestore = (
  key: string,
  ref: MutableRefObject<HTMLDivElement>
) => {
  return useEffect(() => {
    const scrollTop = localStorage.getItem("scrollTop");
    if (scrollTop && ref.current) {
      ref.current.scrollTo(0, Number(scrollTop));
    }
  }, [ref]);
};

export default useScrollTopRestore;
