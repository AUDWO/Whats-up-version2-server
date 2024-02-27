import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoUserRCp = () => {
  const navigate = useNavigate();
  return (
    <NoUserContainer>
      <ContentWrapper2
        onClick={(e) => {
          e.stopPropagation();
          navigate("/sign-in");
        }}
      >
        로그인
      </ContentWrapper2>
      <ContentWrapper2
        onClick={(e) => {
          e.stopPropagation();
          navigate("/sign-up");
        }}
      >
        회원가입
      </ContentWrapper2>
    </NoUserContainer>
  );
};

export default NoUserRCp;

const NoUserContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 70px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ContentWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.main};
  color: #a3a3a3;
  color: black;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContentWrapper2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.sub};
  color: #a3a3a3;
  color: black;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
`;
