import { GetContentUserInfo } from "./userTypes";

//---------------------------GET---------------------------

export interface GetCommentForm {
  id: number;
  content: string;
  contactInfo: GetCommentContactInfo;
  User: GetContentUserInfo;
  commentId: number | null;
  hasReplyComments: boolean;
}

export interface GetCommentContactInfo {
  contactCheck: boolean;
  likeCount: number;
}

export interface PostCommentRes {
  message: string;
}

//---------------------------GET---------------------------

//---------------------------POST-----------------------------

export interface PostCommentForm {
  contentType: string;
  content: string;
}
export interface PostCommentParams {
  contentType: string;
  content: string;
  contentId: number;
}

export interface PostReplyCommentForm extends PostCommentForm {
  commentId: number;
}

export interface PostReplyCommentParams extends PostCommentParams {
  commentId: number;
}

//-------------------------POST--------------------------------
