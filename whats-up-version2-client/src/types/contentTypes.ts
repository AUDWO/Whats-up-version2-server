import { ContentUserInfo } from "./userTypes";

//get
export interface GetPostForm {
  id: number;
  img: string;
  mainContent: string;
  subContent: string;
  title: string;
  contactInfo: PostContact;
  userInfo: ContentUserInfo;
}

export interface PostContact {
  id: number;
  contactCheck: boolean;
  allowLike: boolean;
  allowSubcontent: boolean;
  allowComment: boolean;
  commentCount: number;
  likeCount: number;
}

export interface GetStoryForm {
  id: number;
  img: string;
  content: string;
  userInfo: ContentUserInfo;
}

export interface GetDiaryForm {
  id: number;
  title: string;
  content: string;
  img: string;
  contactInfo: DiaryContact;
  userInfo: ContentUserInfo;
}

export interface DiaryContact {
  id: number;
  allowContact: boolean;
  allowComment: boolean;
  allowPublic: boolean;
  commentCount: number;
  contactCount: number;
}
