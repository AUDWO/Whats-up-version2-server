import { getMyInfo, getUserInfo } from "@/apis/userApis";
import { useQuery } from "@tanstack/react-query";

const userInfoQuery = () => {
  const userInfoQueryObject = useQuery({
    queryKey: ["myUserInfo"],
    queryFn: getMyInfo,
  });

  return { ...userInfoQueryObject };
};

export default userInfoQuery;
