import styled from "styled-components";

const RecommendUserCp = () => {
  return (
    <RecommendUserContainer>
      <RecommendUserInfoWrapper>
        <RecommendUserImg />
        <RecommendUserName>Jaems_0_0_0</RecommendUserName>
      </RecommendUserInfoWrapper>
      <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
    </RecommendUserContainer>
  );
};

export default RecommendUserCp;

const RecommendUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const RecommendUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RecommendUserImg = styled.img`
  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 50%;
  margin-right: 10px;
`;

const RecommendUserFollowButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px 7px 5px 7px;
  background-color: #f7dd07;
  font-size: 14px;
  border-radius: 4px;
  color: ${(props) => props.theme.bgColor};
`;

const RecommendUserName = styled.div`
  margin-right: 30px;
  color: ${(props) => props.theme.fontColor};
`;
