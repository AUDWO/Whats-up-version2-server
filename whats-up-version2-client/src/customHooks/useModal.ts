import modalStore from "@/store/modalStore";
import viewPortFixedState from "@/store/viewPortFixedState";
import { useRecoilState, useSetRecoilState } from "recoil";
import ModalNames from "@/types/ModalNamesTypes";

const useModal = (modalName: ModalNames) => {
  const [isOpenState, setIsOpenState] = useRecoilState(modalStore);
  const setFixedState = useSetRecoilState(viewPortFixedState);

  const isOpen = isOpenState[modalName as ModalNames];

  const onOpen = () => {
    setIsOpenState((prev) => ({
      ...prev,
      [modalName]: true,
    }));
    setFixedState(true);
  };

  const onClose = () => {
    setIsOpenState((prev) => ({
      ...prev,
      [modalName]: false,
    }));
    setFixedState(false);
  };

  return { isOpen, onOpen, onClose };
};

export default useModal;
