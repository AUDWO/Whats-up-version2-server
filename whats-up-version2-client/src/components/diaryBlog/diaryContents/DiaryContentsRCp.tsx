import styled from "styled-components";
import DiaryCp from "./DiaryCp";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllDiary } from "@/apis/diaryApis/getApis";

const DiaryContentsRCp = () => {
  const { data: diaryContents, isLoading } = useQuery({
    queryKey: ["all-diary"],
    queryFn: getAllDiary,
  });

  if (isLoading) {
  }

  return (
    <DiaryContentsContainer>
      {diaryContents?.map((diary) => (
        <Link to={`/diary/${diary.id}`}>
          <DiaryCp diaryInfo={diary} />
        </Link>
      ))}
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
  grid-gap: 30px;
  grid-template-columns: repeat(minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 460px) {
    display: grid;
    grid-template-columns: repeat(minmax(300px, 1fr));
  }
`;

//grid-template-columns: repeat(5, 100px);
//grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
