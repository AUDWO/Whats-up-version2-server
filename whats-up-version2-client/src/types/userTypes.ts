export interface GetUserForm {
  id: number;
  email: string;
  img: string;
  name: string;
  nickname: string;
  password: string;
  followInfo: FollowInfo;
  contentInfo: UserContentInfo;
  loginCheck: boolean;
}

export interface ContentUser {
  id: number;
  nickname: string;
  img: string;
}

export interface UserContentInfo {
  postCount: number;
  diaryCount: number;
}

export interface FollowInfo {
  followerCount: number;
  followingCount: number;
}
