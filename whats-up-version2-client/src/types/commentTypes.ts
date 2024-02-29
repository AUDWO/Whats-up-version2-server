import { ContentUserInfo } from "./userTypes";

export interface GetCommentForm {
  id: number;
  content: string;
  contactInfo: ContactInfo;
  userInfo: ContentUserInfo;
}

export interface ContactInfo {
  contactCheck: boolean;
  likeCount: number;
}

export interface PostCommentForm {
  content: string;
}

export interface PostCommentRes {
  message: string;
}
