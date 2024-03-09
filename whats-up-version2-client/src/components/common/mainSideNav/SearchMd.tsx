import useOutClickEffect from "@/customHooks/useOutClickEffect";
import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";
const SearchMd = () => {
  const [searchModalOpenState, setSearchModalOpenState] = useRecoilState(
    dependedModalOpenState("searchMd")
  );
  const searchModalRef = useRef(null);

  const text = "찾고 싶은 사용자를 검색해보세요!";

  useOutClickEffect(searchModalRef, () => {
    setSearchModalOpenState(false);
  });
  return (
    <SearchMdContainer isopen={searchModalOpenState} ref={searchModalRef}>
      <SearchTextWrapper>
        <SearchText>검색</SearchText>
      </SearchTextWrapper>
      <SearchInputWrapper>
        <SearchInput placeholder="검색" />
      </SearchInputWrapper>
      <UserList>
        <NoSearchCp>검색하신 사용자는{"\n"} 존재하지 않습니다.</NoSearchCp>
      </UserList>
    </SearchMdContainer>
  );
};

export default SearchMd;
/*
<UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>

*/
const NoSearchCp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 830px) {
    white-space: pre-wrap;
  }
  line-height: 200%;
  text-align: center;
`;

const SearchMdContainer = styled.div<{ isopen: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 10px 0px;
  position: fixed;
  left: 0;

  transform: translateX(${(props) => (props.isopen ? "29%" : "-100%")});
  z-index: 9999;
  width: 350px;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  transition: transform 0.3s ease-out;
  @media screen and (max-width: 830px) {
    transform: translateX(${(props) => (props.isopen ? "0" : "-100%")});
    width: 250px;
  }
  @media screen and (max-width: 501px) {
    top: 70px;
  }
`;

const SearchTextWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 15px;
`;

const SearchText = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

const SearchInputWrapper = styled.div`
  border-radius: 5px 0px 0px 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding: 9px 5px 9px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.subBgColor};
  background-color: #efefef;
  color: ${(props) => props.theme.fontColor};
`;

const UserList = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 40px;
  padding-top: 20px;

  overflow-y: scroll;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
  cursor: pointer;
  width: 100%;
  padding: 20px;
`;

const UserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserProfileName = styled.div`
  font-size: 14px;
  font0-weight: 700;
  color: ${(props) => props.theme.fontColor};
`;
