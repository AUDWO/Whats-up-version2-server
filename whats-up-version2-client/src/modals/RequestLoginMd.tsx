import useModal from "@/customHooks/useModal";
import ButtonCp from "@components/common/ButtonCp";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import ModalBackgroundCp from "./ModalBackgroundCp";

const RequestLoginMd = () => {
  const { onClose } = useModal("requestLoginMd");

  return (
    <ModalBackgroundCp atomKey="requestLoginMd">
      <ModalContainer>
        <ModalCloseIcon onClick={onClose} />
        <TextWrapper>
          <MainText>로그인 후 이용 가능합니다.</MainText>
          <SubText>로그인을 하시겠습니까?</SubText>
        </TextWrapper>
        <ButtonWrapper>
          <ButtonCp onClick={onClose}>취소</ButtonCp>
          <ButtonCp>로그인</ButtonCp>
        </ButtonWrapper>
      </ModalContainer>
    </ModalBackgroundCp>
  );
};

export default RequestLoginMd;

const ModalContainer = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.mdColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

const SubText = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const ButtonWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ModalCloseIcon = styled(IoIosCloseCircle)`
  color: #e91e63;
  position: absolute;
  top: 2%;
  right: 1%;
  font-size: 25px;
  cursor: pointer;
`;
