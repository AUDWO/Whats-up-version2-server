import styled from "styled-components";
import {
  TrendingIcon,
  LatestIcon,
} from "@components/icons/DiaryBlogFilterIcons";
import { useRecoilState } from "recoil";
import toggleState from "@/store/toggleState";

const DiaryFilterCp = () => {
  const [filterType, setFilterType] = useRecoilState(
    toggleState("diaryBlogFilterType")
  );

  return (
    <DiaryFilterContainer>
      <DiaryFilterWrapper
        onFilter={!filterType}
        onClick={() => {
          setFilterType(false);
        }}
      >
        <TrendingIcon />
        <DiaryFilterTitle>트렌디</DiaryFilterTitle>
      </DiaryFilterWrapper>
      <DiaryFilterWrapper
        onFilter={filterType}
        onClick={() => {
          setFilterType(true);
        }}
      >
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
  font-size: 18px;
  font-weight: 500;
`;

const DiaryFilterWrapper = styled.div<{ onFilter: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 30px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.fontColor};
  }
  padding: 0px 7px 7px 3px;
  color: ${(props) => (props.onFilter ? props.theme.fontColor : `#acacac`)};
  ${(props) => props.onFilter && `border-bottom:2px solid black`};
`;
