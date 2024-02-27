import styled from "styled-components";
import { SunIcon } from "@components/icons/SeeMoreIcons";
import ToggleButtonV2Cp from "@components/common/ToggleButtonV2Cp";
import useOutClickEffect from "@/customHooks/useOutClickEffect";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";
const SeeMorePopUp = () => {
  const seeMorePopUpRef = useRef(null);
  const setSeeMorePopUpOpen = useSetRecoilState(
    dependedModalOpenState("seeMorePu")
  );

  useOutClickEffect(seeMorePopUpRef, () => {
    setSeeMorePopUpOpen(false);
  });

  return (
    <SeeMorePopUpContainer ref={seeMorePopUpRef}>
      <ModeSelectTitleWrapper>
        <ModeSelectTitleText>모드 전환</ModeSelectTitleText>
        <SunIcon />
      </ModeSelectTitleWrapper>
      <DarkModeSelectWrapper>
        <DarkModeSelectText>다크 모드</DarkModeSelectText>
        <ToggleButtonV2Cp />
      </DarkModeSelectWrapper>
    </SeeMorePopUpContainer>
  );
};

export default SeeMorePopUp;

const SeeMorePopUpContainer = styled.div`
  width: 180px;
  height: 110px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  right: 0%;
  top: -120px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 8px 0px;
`;

const ModeSelectTitleWrapper = styled.div`
  height: 50%;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ModeSelectTitleText = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => props.theme.fontColor};
`;
const DarkModeSelectWrapper = styled.div`
  height: 50%;
  width: 100%;
  padding-left: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DarkModeSelectText = styled.div`
  font-size: 13px;
`;
