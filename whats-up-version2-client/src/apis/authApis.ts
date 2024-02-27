import {
  LoginCheck,
  NicknameCheck,
  SignInForm,
  SignInRes,
  SignUpForm,
  SignUpRes,
} from "@/types/authTypes";
import getData from "./httpMethods/getData";
import postData from "./httpMethods/postData";

export const getNicknameCheck = (nickname: string) =>
  getData<NicknameCheck>(`/auth/nickname-check/${nickname}`);

export const getEmailCheck = (email: string) =>
  getData<LoginCheck>(`/auth/email-check/${email}`);

export const postLogout = (data: string) => postData("/auth/logout", data);

export const postSignIn = (data: SignInForm) =>
  postData<any, SignInForm>("/auth/sign-in", data);

export const postSignUp = (data: SignUpForm) =>
  postData<SignUpRes, SignUpForm>("/auth/sign-up", data);
