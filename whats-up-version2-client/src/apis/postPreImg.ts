import postData from "./httpMethods/postData";

export interface Res {
  url: string;
}
export const postPreImg = (formData: FormData) =>
  postData<Res, FormData>("/img", formData);
