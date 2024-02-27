import styled from "styled-components";
import DiaryCp from "./DiaryCp";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllDiary } from "@/apis/diaryApis/getApis";

const DiaryContentsRCp = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-diary"],
    queryFn: getAllDiary,
  });

  return (
    <DiaryContentsContainer>
      <Link to={`/diary/${1}`}>
        <DiaryCp />
      </Link>
      <DiaryCp />
      <DiaryCp />
      <DiaryCp />
      <DiaryCp />
    </DiaryContentsContainer>
  );
};

export default DiaryContentsRCp;

const DiaryContentsContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  grid-gap: 30px;
`;
