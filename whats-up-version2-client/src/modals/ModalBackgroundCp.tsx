import styled from "styled-components";
import { useRef } from "react";
import useModal from "@/customHooks/useModal";

interface PropsType {
  children: React.ReactNode;
  atomKey: string;
}
//모든 모달이 가지고 있는 공통적인 기능(모달 외부 영역 클릭시 모달 담힘)을
//제공하기 위한 컴포넌트
const ModalBackgroundCp = ({ children, atomKey }: PropsType) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { onClose } = useModal(atomKey);
  return (
    <Background
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) onClose();
      }}
    >
      {children}
    </Background>
  );
};

export default ModalBackgroundCp;

const Background = styled.div`
  background-color: ${(props) => props.theme.mdBgColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999999;
`;
