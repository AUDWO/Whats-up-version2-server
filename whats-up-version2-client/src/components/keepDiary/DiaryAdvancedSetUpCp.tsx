import styled from "styled-components";
import ToggleButtonCp from "@components/common/ToggleButtonCp";
import { useState } from "react";
import { ArrowDownIcon } from "@components/icons/commonIcons/ArrowDownIcon";
import { ArrowUpIcon } from "@components/icons/commonIcons/ArrowUpIcon";
const DiaryAdvancedSetUpCp = () => {
  const [setUpOpen, setSetUpOpen] = useState(false);
  return (
    <DiaryPublicDetailsContainer>
      <DiaryPublicSelectWrapper>
        <DiaryPublicSelectText>일기 공개</DiaryPublicSelectText>
        {setUpOpen ? (
          <ArrowUpIcon
            onClick={() => {
              setSetUpOpen(false);
            }}
            color={"#acacac"}
            fontSize={"20px;"}
          />
        ) : (
          <ArrowDownIcon
            onClick={() => {
              setSetUpOpen(true);
            }}
            color={"#acacac"}
            fontSize={"20px;"}
          />
        )}
      </DiaryPublicSelectWrapper>
      {setUpOpen && (
        <DiaryPublicDetailsTogglesWrapper>
          <DiaryPublicDetailsToggleWrapper>
            <DiaryPublicDetailsText>댓글 기능 해제</DiaryPublicDetailsText>
            <ToggleButtonCp inputId="diaryAllowComment" />
          </DiaryPublicDetailsToggleWrapper>
          <DiaryPublicDetailsToggleWrapper>
            <DiaryPublicDetailsText>좋아요 기능 해제</DiaryPublicDetailsText>
            <ToggleButtonCp inputId="diaryAllowLike" />
          </DiaryPublicDetailsToggleWrapper>
          <DiaryPublicDetailsToggleWrapper>
            <DiaryPublicDetailsText>비공개</DiaryPublicDetailsText>
            <ToggleButtonCp inputId="diaryAllowPublic" />
          </DiaryPublicDetailsToggleWrapper>
        </DiaryPublicDetailsTogglesWrapper>
      )}
    </DiaryPublicDetailsContainer>
  );
};

export default DiaryAdvancedSetUpCp;

const DiaryPublicSelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DiaryPublicSelectText = styled.div`
  color: #acacac;
`;

const DiaryPublicDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between @media screen and (max-width: 985px) {
    height: 300px;
  }
`;

const DiaryPublicDetailsTogglesWrapper = styled.div`
  width: 270px;
  height: 160px;
  border: 4px solid #4199ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  @media screen and (max-width: 985px) {
    margin-top: 10px;
  }
`;

const DiaryPublicDetailsToggleWrapper = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-between;
`;
const DiaryPublicDetailsText = styled.div`
  color: #acacac;
  display: flex;
  align-items: center;
`;

const DiaryPublicDetailsToggleButton = styled.div``;
