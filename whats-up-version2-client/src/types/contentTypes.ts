import { GetContentUserInfo } from "./userTypes";

//---------------------------GET----------------------------
// Post
export interface GetPostForm {
  id: number;
  img: string;
  mainContent: string;
  subContent: string;
  allowContactInfo: GetPostAllowContact;
  contactCountInfo: GetPostContactCount;
  User: GetContentUserInfo;
}

export interface GetPostContactCount {
  likeCount: number;
  commentCount: number;
}

export interface GetPostAllowContact {
  postId: number;
  contactCheck: boolean;
  allowLike: boolean;
  allowSubcontent: boolean;
  allowComment: boolean;
}

// Story
export interface GetStoryForm {
  id: number;
  img: string;
  content: string;
  User: GetContentUserInfo;
  contactCountInfo: GetStoryContactCount;
  allowContactInfo: GetStoryAllowContact;
}

export interface GetStoryContactCount {
  likeCount: number;
  commentCount: number;
}

export interface GetStoryAllowContact {
  allowPublic: boolean;
  allowLike: boolean;
  allowComment: boolean;
}

//Diary
export interface GetDiaryForm {
  id: number;
  title: string;
  content: string;
  img: string;
  contactCountInfo: GetDiaryContactCount;
  allowContactInfo: GetDiaryAllowContact;
  userInfo: GetContentUserInfo;
}

export interface GetDiaryContactCount {
  likeCount: number;
  commentCount: number;
}

export interface GetDiaryAllowContact {
  allowPublic: boolean;
  allowLike: boolean;
  allowComment: boolean;
}

//---------------------------GET----------------------------

//---------------------------POST---------------------------

export interface PostStoryForm {
  content: string;
  img: string;
}

export interface PostPostForm {
  mainContent: string;
  subContent: string;
  img: string;
  allowComment: boolean;
  allowLike: boolean;
  allowSubcontent: boolean;
}

export interface PostDiaryForm {
  title: string;
  content: string;
  img: string;
  allowComment: boolean;
  allowLike: boolean;
  allowPublic: boolean;
}
//---------------------------POST---------------------------
