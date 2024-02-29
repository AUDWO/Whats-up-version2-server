import { GetCommentForm } from "@/types/commentTypes";
import getData from "../httpMethods/getData";

export const getPostComments = (postId: number) =>
  getData<GetCommentForm[]>(`/get/post-comments/${postId}`);

export const getStoryComments = (storyId: number) =>
  getData<GetCommentForm[]>(`/get/story-comments/${storyId}`);

export const getDiaryComments = (diaryId: number) =>
  getData<GetCommentForm[]>(`/get/diary-comments/${diaryId}`);

export const getComments = (contentId: number, contentType: string) =>
  getData<GetCommentForm[]>(`/get/${contentType}-comments/${contentId}`);

export const getPostReplyComments = (commentId: number) =>
  getData<GetCommentForm[]>(`/get/post-reply-comments/${commentId}`);

export const getStoryReplyComments = (commentId: number) =>
  getData<GetCommentForm[]>(`/get/story-reply-comments/${commentId}`);

export const getDiaryReplyComments = (commentId: number) =>
  getData<GetCommentForm[]>(`/get/diary-reply-comments/${commentId}`);
