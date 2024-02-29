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
        LOGIN / SIGN-UP
      </ContentWrapper2>
    </NoUserContainer>
  );
};

/*
 <ContentWrapper2
        onClick={(e) => {
          e.stopPropagation();
          navigate("/sign-up");
        }}
      >
        회원가입
      </ContentWrapper2>


*/
export default NoUserRCp;

const NoUserContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 70px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  margin-right: 20px;
  width: 100%;
  font-family: Orbitron;
  border-radius: 8px;
  color: #a3a3a3;
  color: black;
  font-weight: 600;
  color: white;
  border: none;
  background-color: white;
  color: ${(props) => props.theme.color.sub};
  color: black;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 35px;
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.color.main};
  }
`;

// border: 3px solid ${(props) => props.theme.color.main};
