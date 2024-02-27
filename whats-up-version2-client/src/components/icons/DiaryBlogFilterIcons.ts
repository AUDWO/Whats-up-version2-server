import styled from "styled-components";
//clock
import { FcClock } from "react-icons/fc";

//trend
import { FcPositiveDynamic } from "react-icons/fc";

const DiaryBlogIconsFilterSize = "20px";

export const TrendingIcon = styled(FcPositiveDynamic)`
  font-size: ${DiaryBlogIconsFilterSize};
  margin-right: 5px;
`;

export const LatestIcon = styled(FcClock)`
  font-size: ${DiaryBlogIconsFilterSize};
  margin-right: 5px;
`;
