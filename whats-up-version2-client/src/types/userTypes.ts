export interface GetUserForm {
  id: number;
  email: string;
  img: string | null;
  name: string;
  nickname: string;
  password: string;
  selfIntroduction: string;
  followInfo: FollowInfo;
  contentInfo: UserHasContentInfo;
  loginCheck: boolean;
}

export interface ContentUserInfo {
  id: number;
  nickname: string;
  img: string | null;
}

export interface UserHasContentInfo {
  postCount: number;
  diaryCount: number;
}

export interface FollowInfo {
  followerCount: number;
  followingCount: number;
}
