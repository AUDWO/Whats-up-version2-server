import { PostDiaryForm } from "@/types/post/contentTypes";
import postData from "../httpMethods/postData";
import { MessageRes } from "@/types/responseTypes";

export const postDiary = ({
  title,
  content,
  img,
  allowLike,
  allowComment,
  allowPublic,
}: PostDiaryForm) =>
  postData<MessageRes, PostDiaryForm>("/diary", {
    title,
    content,
    img,
    allowComment,
    allowLike,
    allowPublic,
  });
