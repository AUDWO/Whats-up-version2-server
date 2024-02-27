import dependedModalOpenState from "@/store/dependedModalOpenState";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";

const NavTitleCp = () => {
  const title = "WHAT'S UP";

  const searchMdOpenState = useRecoilValue(dependedModalOpenState("searchMd"));

  return (
    <MainTitleWrapper searchMdOpen={searchMdOpenState}>
      {title.split("").map((char, index) => (
        <MainTilteLetter
          key={index}
          color={char === "'" ? "sub" : ""}
          searchMdOpen={searchMdOpenState}
        >
          {char === " " ? "\u00A0" : char}
        </MainTilteLetter>
      ))}
    </MainTitleWrapper>
  );
};

export default NavTitleCp;

const sideNavMiniVersion1200 = `@media screen and (max-width:1330px)`;
const downNavMiniVersion705 = `@media screen and (max-width:830px)`;

const mainTitleWrapperMiniVersionCss = css``;

const mainTitleLetterCss = css`
  display: none;
`;
const mainTitleLetterFontSize = "28px";
const fontFamily = "Orbitron";

const MainTitleWrapper = styled.div<{ searchMdOpen: boolean }>`
  display: flex;
  margin-left: 50px;
  ${(props) => props.searchMdOpen && mainTitleWrapperMiniVersionCss};
  ${sideNavMiniVersion1200} {
    ${mainTitleWrapperMiniVersionCss}
  }
  ${downNavMiniVersion705} {
    display: none;
  }
`;
const MainTilteLetter = styled.div<{ searchMdOpen: boolean }>`
  font-family: ${fontFamily};
  font-size: ${mainTitleLetterFontSize};
  ${(props) => props.searchMdOpen && mainTitleLetterCss};
  ${sideNavMiniVersion1200} {
    ${mainTitleLetterCss}
  }
  color: ${(props) =>
    props.color ? props.theme.color.sub : props.theme.color.main};
`;
