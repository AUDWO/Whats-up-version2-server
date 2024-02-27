import { MessageRes } from "@/types/responseTypes";
import postData from "../httpMethods/postData";
import { PostPostForm } from "@/types/post/contentTypes";

export const postPost = ({
  img,
  mainContent,
  subContent,
  allowComment,
  allowLike,
  allowSubcontent,
}: PostPostForm) =>
  postData<MessageRes, PostPostForm>("/post", {
    img,
    mainContent,
    subContent,
    allowComment,
    allowLike,
    allowSubcontent,
  });
