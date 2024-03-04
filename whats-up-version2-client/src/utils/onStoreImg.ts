import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { Res } from "@/apis/postPreImg";
import { UseMutateFunction } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
const onStoreImg = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPreImg: Dispatch<SetStateAction<string>>,
  mutate: UseMutateFunction<Res, Error, FormData, unknown>
) => {
  const formData = new FormData();
  const selectedImg = e.target.files![0];
  if (selectedImg) {
    const imgUrl = URL.createObjectURL(selectedImg);
    setPreImg(imgUrl);
    formData.append("img", selectedImg);
    mutate(formData);
  }
};

export default onStoreImg;
