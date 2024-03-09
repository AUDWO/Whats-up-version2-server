import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postLogout } from "@/apis/authApis";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";

interface Props {
  userLogin: boolean;
}
const UserSignMenuCp = ({ userLogin }: Props) => {
  const navigate = useNavigate();

  const setSeeMorePopUpOpen = useSetRecoilState(
    dependedModalOpenState("seeMorePu")
  );

  const queryClient = useQueryClient();
  //const { mutate: handleLogout } = useCustomMutation(postLogout, ["myInfo"]);
  const { mutate: handleLogout } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myInfo"] });
    },
  });

  return (
    <DarkModeSelectWrapper onBorder={false}>
      {userLogin ? (
        <DarkModeSelectText
          onClick={() => {
            handleLogout();
            setSeeMorePopUpOpen(false);
            window.location.reload();
          }}
        >
          로그아웃
        </DarkModeSelectText>
      ) : (
        <DarkModeSelectText
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          로그인
        </DarkModeSelectText>
      )}
    </DarkModeSelectWrapper>
  );
};
export default UserSignMenuCp;
const DarkModeSelectWrapper = styled.div<{ onBorder: boolean }>`
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  ${(props) =>
    props.onBorder && `border-bottom:1px solid ${props.theme.borderColor}`}
`;

const DarkModeSelectText = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    background-color: #f0f1f3;
  }
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding-left: 10px;
`;
