import { MessageRes } from "@/types/responseTypes";
import postData from "../httpMethods/postData";
import { PostStoryForm } from "@/types/post/contentTypes";

export const postStory = ({ content, img }: PostStoryForm) =>
  postData<MessageRes, PostStoryForm>("/story", {
    content: content,
    img: img,
  });
