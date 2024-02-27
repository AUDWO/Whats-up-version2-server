import { ContentUser } from "./userTypes";

export interface Comment {
  id: number;
  content: string;
  contactInfo: ContactInfo;
  userInfo: ContentUser;
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
