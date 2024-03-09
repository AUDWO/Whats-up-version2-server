import {
  HomeIcon,
  SearchIcon,
  MakePostIcon,
  DiaryContentsIcon,
  KeepDiaryIcon,
  ProfileIcon,
  MoreIcon,
} from "@components/icons/MainSideNavIcons";

import { useNavigate } from "react-router-dom";
import useModal from "@/customHooks/useModal";
import { useRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";

import {
  MainSideNavMenuContainer,
  MainSideNavMenuList,
  MainSideNavMenuTitle,
  MainSideNavMenuWrapper,
} from "@/styledComponents/mainSideNav/NavMenuCpStyle";

import SeeMorePopUp from "@/popUp/SeeMorePopUp";
import SeeMorePopUp2 from "@/popUp/SeeMorePopUp2";

import {
  MutableRefObject,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import setScrollTopToLs from "@/utils/setScrollTopSaveLs";
import myInfoQuery from "@/customHooks/queryCustomHooks/myInfoQuery";

const NavMenuCp = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const navigate = useNavigate();

  const { data: myInfo } = myInfoQuery();
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    if (myInfo && myInfo.loginCheck) {
      setLoginCheck(true);
    }
  }, [myInfo]);

  const { onOpen: makePostMdOpen } = useModal("makePostMd");
  const { onOpen: requestLoginMdOpen } = useModal("requestLoginMd");

  const [searchModalOpenState, setSearchModalOpenState] = useRecoilState(
    dependedModalOpenState("searchMd")
  );
  const [seeMoreModalOpenState, setSeeMoreModalOpenState] = useRecoilState(
    dependedModalOpenState("seeMorePu")
  );

  const handleClickScrollTopRestore = () => {
    if (ref) {
      setScrollTopToLs(
        "scrollTop",
        String((ref as MutableRefObject<HTMLDivElement>).current.scrollTop)
      );
    }
  };

  const navMenuItems = [
    { icon: <HomeIcon />, title: "홈", onClick: () => navigate("/") },
    {
      icon: <SearchIcon />,
      title: "검색",
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setSearchModalOpenState(!searchModalOpenState);
      },
    },
    {
      icon: <MakePostIcon />,
      title: "만들기",
      onClick: () => {
        if (myInfo?.loginCheck) {
          makePostMdOpen();
        } else {
          requestLoginMdOpen();
        }
      },
    },
    {
      icon: <DiaryContentsIcon />,
      title: "일기",
      onClick: () => {
        handleClickScrollTopRestore();
        navigate("/diary-blog");
      },
    },
    {
      icon: <KeepDiaryIcon />,
      title: "일기 쓰기",
      onClick: () => {
        if (myInfo?.loginCheck) {
          handleClickScrollTopRestore();
          navigate("/keep-diary");
        } else {
          requestLoginMdOpen();
        }
      },
    },
    {
      icon: <ProfileIcon />,
      title: "프로필",
      onClick: () => {
        if (myInfo?.loginCheck) {
          handleClickScrollTopRestore();
          navigate("/profile/my");
        } else {
          requestLoginMdOpen();
        }
      },
    },
    {
      icon: <MoreIcon />,
      title: "더 보기",
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setSeeMoreModalOpenState(!seeMoreModalOpenState);
      },
      children: seeMoreModalOpenState && <SeeMorePopUp2 />,
    },
  ];

  return (
    <MainSideNavMenuList searchMdOpen={searchModalOpenState}>
      {navMenuItems.map((item, index) => (
        <MainSideNavMenuContainer searchMdOpen={searchModalOpenState}>
          {item.children ? item.children : ""}
          <MainSideNavMenuWrapper
            key={index}
            onClick={item.onClick}
            searchMdOpen={searchModalOpenState}
          >
            {item.icon}
            <MainSideNavMenuTitle searchMdOpen={searchModalOpenState}>
              {item.title}
            </MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
        </MainSideNavMenuContainer>
      ))}
    </MainSideNavMenuList>
  );
});

export default NavMenuCp;

//리액트에서 함수가 함수형 컴포넌트가 되기 위한 조건
