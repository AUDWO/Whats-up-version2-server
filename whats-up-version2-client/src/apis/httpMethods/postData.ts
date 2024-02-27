import axios, { AxiosResponse } from "axios";

const postData = async <Res, D>(path: string, data?: D) => {
  const response = await axios.post<Res, AxiosResponse<Res>, D>(
    `${path}`,
    data
  );
  return response.data;
};

export default postData;
