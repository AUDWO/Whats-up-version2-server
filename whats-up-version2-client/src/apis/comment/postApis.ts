import postData from "../httpMethods/postData";
import { MessageRes } from "@/types/responseTypes";

interface PostCommentForm {
  contentType: string;
  content: string;
  contentId: number;
}

interface PostReplyCommentForm extends PostCommentForm {
  commentId: number;
}

export const postComment = ({
  content,
  contentType: type,
  contentId,
}: PostCommentForm) =>
  postData<MessageRes, PostCommentForm>("/comment", {
    content,
    contentType: type,
    contentId,
  });

export const postReplyComment = ({
  content,
  contentType,
  commentId,
  contentId,
}: PostReplyCommentForm) =>
  postData<MessageRes, PostReplyCommentForm>("/replyComment", {
    content,
    contentType,
    contentId,
    commentId,
  });
