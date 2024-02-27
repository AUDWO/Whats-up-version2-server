import styled from "styled-components";
import { ArrowDownIcon } from "@components/icons/commonIcons/ArrowDownIcon";
import { ArrowUpIcon } from "@components/icons/commonIcons/ArrowUpIcon";
import ToggleButtonCp from "@components/common/ToggleButtonCp";

import { useState } from "react";
const MakePostSetUpCp = () => {
  const [setUpOpen, setSetupOpen] = useState(false);
  return (
    <PostAdvancedSetUpContainer>
      <PostAdvancedSetUpButtonWrapper>
        <PostAdvancedSetUpText>고급 설정</PostAdvancedSetUpText>
        <ArrowIconWrapper
          onClick={() => {
            setSetupOpen(!setUpOpen);
          }}
        >
          {setUpOpen ? (
            <ArrowUpIcon fontSize={"20px"} color="#b0b0b0" />
          ) : (
            <ArrowDownIcon fontSize={"20px"} color="#b0b0b0" />
          )}
        </ArrowIconWrapper>
      </PostAdvancedSetUpButtonWrapper>
      {setUpOpen && (
        <PostSetUpDetailsContainer>
          <PostSetUpDetailsWrapper>
            <PostSetUpOptionWrapper>
              <PostSetUpOptionText>좋아요 기능 해제</PostSetUpOptionText>
              <ToggleButtonCp inputId="postAllowLike" />
            </PostSetUpOptionWrapper>
            <PostSetUpOptionWrapper>
              <PostSetUpOptionText>댓글 기능 해제</PostSetUpOptionText>
              <ToggleButtonCp inputId="postAllowComment" />
            </PostSetUpOptionWrapper>
            <PostSetUpOptionWrapper>
              <PostSetUpOptionText>서브 컨텐츠 작성</PostSetUpOptionText>
              <ToggleButtonCp inputId="postAllowSubContent" />
            </PostSetUpOptionWrapper>
          </PostSetUpDetailsWrapper>
        </PostSetUpDetailsContainer>
      )}
    </PostAdvancedSetUpContainer>
  );
};

export default MakePostSetUpCp;

const PostAdvancedSetUpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const PostAdvancedSetUpButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 5px 20px 5px 20px;
  margin-bottom: 30px;
`;

const PostAdvancedSetUpText = styled.div`
  color: #b0b0b0;
`;

const ArrowIconWrapper = styled.div`
  cursor: pointer;
`;

const PostSetUpDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: Center;
`;
const PostSetUpDetailsWrapper = styled.div`
  border: 3px solid #4199ff;
  border-radius: 8px;
  height: auto;
  width: 80%;
`;
const PostSetUpOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const PostSetUpOptionText = styled.div`
  margin-left: 10px;
  font-size: 15px;
  color: #b0b0b0;
`;
