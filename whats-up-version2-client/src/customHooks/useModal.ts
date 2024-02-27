import modalStore from "@/store/modalStore";
import viewPortFixedState from "@/store/viewPortFixedState";
import { useRecoilState, useSetRecoilState } from "recoil";

const useModal = (modalName: string) => {
  const [isOpenState, setIsOpenState] = useRecoilState(modalStore);
  const setFixedState = useSetRecoilState(viewPortFixedState);

  type ModalKeys = keyof typeof isOpenState;

  const isOpen = isOpenState[modalName as ModalKeys];

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
