import styled from "styled-components";
import {
  TrendingIcon,
  LatestIcon,
} from "@components/icons/DiaryBlogFilterIcons";

const DiaryFilterCp = () => {
  return (
    <DiaryFilterContainer>
      <DiaryFilterWrapper>
        <TrendingIcon />
        <DiaryFilterTitle>트렌디</DiaryFilterTitle>
      </DiaryFilterWrapper>
      <DiaryFilterWrapper>
        <LatestIcon />
        <DiaryFilterTitle>최신</DiaryFilterTitle>
      </DiaryFilterWrapper>
    </DiaryFilterContainer>
  );
};

export default DiaryFilterCp;

const DiaryFilterContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const DiaryFilterTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #acacac;
`;

const DiaryFilterWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 10px;
  }
  padding: 7px 15px 7px 15px;
`;
