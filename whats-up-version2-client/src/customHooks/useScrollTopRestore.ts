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

/*
  useEffect(() => {
    const scrollContainerScrollTop = localStorage.getItem("scrollTop");
    console.log(scrollContainerRef, "scrollContainerRef - 0-0-0-");
    if (scrollContainerScrollTop && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, Number(scrollContainerScrollTop));
    }
  }, [scrollContainerRef]);*/
