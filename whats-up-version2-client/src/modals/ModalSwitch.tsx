import modalStore from "@/store/modalStore";
import { useRecoilValue } from "recoil";
import { ReactElement } from "react";

interface ModalSwitchPropsType {
  modals: {
    postCommentMd: ReactElement;
    makePostMd: ReactElement;
    makeStoryMd: ReactElement;
    requestLoginMd: ReactElement;
  };
}
type ModalKeys = keyof ModalSwitchPropsType["modals"];

const ModalSwitch = ({ modals }: ModalSwitchPropsType) => {
  const modalsObject = useRecoilValue(modalStore);
  const openedModalKey = Object.keys(modalsObject).find(
    (key) => modalsObject[key as ModalKeys] === true
  );

  return modals[openedModalKey as ModalKeys] || null;
};

export default ModalSwitch;
