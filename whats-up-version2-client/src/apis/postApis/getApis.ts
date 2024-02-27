import { GetPostForm, PostContact } from "@/types/contentTypes";
import getData from "../httpMethods/getData";

export const getAllPost = () => getData<GetPostForm[]>(`/get/all-post`);

export const getUserAllPost = (userId: number) =>
  getData<GetPostForm[]>(`/get/user-all-post/${userId}`);

export const getOnlyPost = (postId: number) =>
  getData<GetPostForm>(`/get/only-post/${postId}`);

export const getPostContactInfo = (postId: number) => {
  getData<PostContact>(`/get/post/contact-info/${postId}`);
};

/*
import axios, { AxiosResponse } from 'axios';

const getData = async <T>(path: string): Promise<T> => {
  try {
    const response: AxiosResponse = await axios.get(path);
    return response.data as T;
  } catch (error) {
    console.error(error);
  }
};

export default getData;

// 이제 각 API 요청에 따른 데이터 타입을 정의하면 됩니다.

interface UserPosts {
  // 사용자의 모든 게시물에 대한 데이터 타입 정의
}

interface Post {
  // 단일 게시물에 대한 데이터 타입 정의
}

import getData from "./httpMethods/getData";

export const getUserAllPost = (userId: number) =>
  getData<UserPosts>(`/get/user-all-post/${userId}`);

export const getOnlyPost = (postId: number) =>
  getData<Post>(`/get/only-post/${postId}`);

  */
