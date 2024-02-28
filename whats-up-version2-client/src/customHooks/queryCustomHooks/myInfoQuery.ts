import { getMyInfo } from "@/apis/userApis";
import { useQuery } from "@tanstack/react-query";

const myInfoQuery = (enabledBooleanValue = true) => {
  const userInfoQueryObject = useQuery({
    queryKey: ["myInfo"],
    queryFn: getMyInfo,
    enabled: enabledBooleanValue,
  });

  return { ...userInfoQueryObject };
};

export default myInfoQuery;
