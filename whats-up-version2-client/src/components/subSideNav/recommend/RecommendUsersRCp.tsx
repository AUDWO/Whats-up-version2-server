import styled from "styled-components";
import RecommendUserCp from "./RecommendUserCp";

const RecommendUsersRCp = () => {
  return (
    <RecommendContainer>
      <RecommendTitle>추천 유저</RecommendTitle>
      <RecommendUserList>
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
        <RecommendUserCp />
      </RecommendUserList>
    </RecommendContainer>
  );
};

export default RecommendUsersRCp;

const RecommendContainer = styled.div`
  width: 280px;
  height: 500px;
  padding-left: 10px;
`;

const RecommendTitle = styled.div`
  font-size: 18px;
  color: #a3a3a3;
`;

const RecommendUserList = styled.div`
width:100%:
`;
