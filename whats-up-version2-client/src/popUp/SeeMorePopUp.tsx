import styled from "styled-components";
import { SunIcon } from "@components/icons/SeeMoreIcons";
import { MoonIcon } from "@components/icons/SeeMoreIcons";
import ToggleButtonV2Cp from "@components/common/ToggleButtonV2Cp";
import useOutClickEffect from "@/customHooks/useOutClickEffect";
import { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";
import darkModeAtom from "@/store/persist/darkModeAtom";
const SeeMorePopUp = () => {
  const seeMorePopUpRef = useRef(null);
  const setSeeMorePopUpOpen = useSetRecoilState(
    dependedModalOpenState("seeMorePu")
  );

  useOutClickEffect(seeMorePopUpRef, () => {
    setSeeMorePopUpOpen(false);
  });

  const [darkModeState, setDarkModeState] = useRecoilState(darkModeAtom);

  return (
    <SeeMorePopUpContainer ref={seeMorePopUpRef}>
      <ModeSelectTitleWrapper>
        <ModeSelectTitleText>모드 전환</ModeSelectTitleText>
        {darkModeState ? <MoonIcon /> : <SunIcon />}
      </ModeSelectTitleWrapper>
      <DarkModeSelectWrapper>
        <DarkModeSelectText>다크 모드</DarkModeSelectText>
        <ToggleButtonV2Cp
          inputId="darkMode"
          toggleValue={darkModeState}
          setToggleValue={setDarkModeState}
        />
      </DarkModeSelectWrapper>
    </SeeMorePopUpContainer>
  );
};

export default SeeMorePopUp;

const SeeMorePopUpContainer = styled.div`
  width: 180px;
  height: 110px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.subBgColor};
  position: absolute;
  right: 0%;
  top: -120px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 8px 0px;
  @media screen and (max-width: 1330px) {
    right: -150%;
  }
  @media screen and (max-width: 830px) {
    right: 10%;
  }
`;

const ModeSelectTitleWrapper = styled.div`
  height: 50%;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
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
  color: ${(props) => props.theme.fontColor};
`;
