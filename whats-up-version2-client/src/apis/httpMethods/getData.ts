import axios from "axios";

const getData = async <T>(path: string) => {
  const response = await axios.get<T>(`${path}`);
  return response.data;
};

export default getData;
