import { MutableRefObject } from "react";

const resizeTextareaHeight = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  textarea: MutableRefObject<HTMLTextAreaElement>,
  callback: () => void
) => {
  callback();
  if (textarea.current) {
    textarea.current.style.height = "auto"; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  }
};

export default resizeTextareaHeight;
