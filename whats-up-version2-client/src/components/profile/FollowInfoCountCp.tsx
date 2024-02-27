import styled from "styled-components";

const FollowInfoCountCp = () => {
  return (
    <FollowInfoContainer>
      <FollowWrapper>
        <FollowTitle>팔로우</FollowTitle>
        <FollowrCountNumber>1299</FollowrCountNumber>
      </FollowWrapper>
      <FollowWrapper>
        <FollowTitle>팔로우</FollowTitle>
        <FollowrCountNumber>1299</FollowrCountNumber>
      </FollowWrapper>
    </FollowInfoContainer>
  );
};

export default FollowInfoCountCp;

const FollowInfoContainer = styled.div`
  display: flex;
`;
const FollowWrapper = styled.div`
  display: flex;
  margin-right: 30px;
`;
const FollowTitle = styled.div`
  margin-right: 5px;
  color: ${(props) => props.theme.fontColor};
`;

const FollowrCountNumber = styled.div`
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
`;
