import { GetDiaryForm, DiaryContact } from "@/types/contentTypes";
import getData from "../httpMethods/getData";

export const getAllDiary = () => getData<GetDiaryForm[]>("/get/all-diary");

export const getUserAllDiary = (userId: number) =>
  getData<GetDiaryForm[]>(`/get/user-all-diary/${userId}`);

export const getOnlyDiary = (diaryId: number) =>
  getData<GetDiaryForm>(`/get/only-diary/${diaryId}`);

export const getDiaryContactInfo = (diaryId: number) => {
  getData<DiaryContact>(`/get/diary/contact-info/${diaryId}`);
};
