import { useRecoilState, useRecoilValue } from "recoil";
import toggleState from "@/store/toggleState";
import styled from "styled-components";

interface Props {
  inputId: string;
}

const ToggleButtonCp = ({ inputId }: Props) => {
  const [toggleValue, setToggleValue] = useRecoilState(toggleState(inputId));

  return (
    <Container>
      <AbleCheckbox
        id={inputId}
        type="checkbox"
        hidden
        checked={toggleValue}
        onChange={() => setToggleValue(!toggleValue)}
      />
      <ToggleAbleSwitch htmlFor={inputId}>
        <ToggleAbleButton></ToggleAbleButton>
      </ToggleAbleSwitch>
    </Container>
  );
};

export default ToggleButtonCp;

const Container = styled.div``;

export const ToggleAbleSwitch = styled.label`
  width: 64px;
  height: 3px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #bbbbbb;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 30px;
  transition: all 0.2s ease-in;
`;

export const ToggleAbleButton = styled.span`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 0.1px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #bbbbbb;
  transition: all 0.2s ease-in;
`;
export const AbleCheckbox = styled.input`
  &:checked + ${ToggleAbleSwitch} {
    background-color: #4199ff;
    ${ToggleAbleButton} {
      left: calc(100% - 20px);
      background-color: #4199ff;
    }
  }
`;
