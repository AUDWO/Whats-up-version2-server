import { Comment } from "@/types/commentTypes";
import getData from "../httpMethods/getData";

export const getPostComments = (postId: number) =>
  getData<Comment[]>(`/get/post-comments/${postId}`);

export const getStoryComments = (storyId: number) =>
  getData<Comment[]>(`/get/story-comments/${storyId}`);

export const getDiaryComments = (diaryId: number) =>
  getData<Comment[]>(`/get/diary-comments/${diaryId}`);

export const getPostReplyComments = (commentId: number) =>
  getData<Comment[]>(`/get/post-reply-comments/${commentId}`);

export const getStoryReplyComments = (commentId: number) =>
  getData<Comment[]>(`/get/story-reply-comments/${commentId}`);

export const getDiaryReplyComments = (commentId: number) =>
  getData<Comment[]>(`/get/diary-reply-comments/${commentId}`);
