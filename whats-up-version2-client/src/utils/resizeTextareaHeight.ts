import { MutableRefObject } from "react";

const handleResizeHeight = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  textarea: MutableRefObject<HTMLTextAreaElement>,
  setContent: (content: string) => void
) => {
  setContent(e.target.value);
  if (textarea.current) {
    textarea.current.style.height = "auto"; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  }
};

export default handleResizeHeight;
