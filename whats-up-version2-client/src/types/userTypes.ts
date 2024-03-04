export interface GetUserForm {
  id: number;
  email: string;
  img: string | null;
  name: string;
  nickname: string;
  password: string;
  selfIntroduction: string;
  followInfo: GetFollowInfo;
  contentCountInfo: GetContentCountInfo;
  loginCheck: boolean;
}

export interface GetContentUserInfo {
  id: number;
  nickname: string;
  img: string | null;
}

export interface GetContentCountInfo {
  postCount: number;
  diaryCount: number;
}

export interface GetFollowInfo {
  followerCount: number;
  followingCount: number;
}
