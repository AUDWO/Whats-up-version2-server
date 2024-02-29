import { GetUserForm } from "@/types/userTypes";
import getData from "./httpMethods/getData";

export const getMyInfo = () => getData<GetUserForm>(`/user/my-info`);
//유저 정보 불러올 때
export const getUserInfo = (userId: number) =>
  getData<GetUserForm>(`/user/other-info/${userId}`);

//팔로우 팔로잉 버튼 조건부 렌더링에 필요
export const getFollowerCheck = (userId: number) =>
  getData(`/user/check-folloer/${userId}`);

//팔로우 하거나 언팔 했을때 팔로잉수 변화를 주기 위해
export const getUserFollowInfo = (userId: number) => {
  getData(`/user/follow-info/${userId}`);
};
