import styled from "styled-components";

interface Props {
  inputId: string;
  toggleValue: boolean;
  setToggleValue: (toggleValue: boolean) => void;
}
const ToggleButtonV2Cp = ({ inputId, toggleValue, setToggleValue }: Props) => {
  return (
    <Container>
      <AbleCheckbox
        id={inputId}
        type="checkbox"
        hidden
        checked={toggleValue}
        onChange={() => {
          setToggleValue(!toggleValue);
        }}
      />
      <ToggleAbleSwitch htmlFor={inputId}>
        <ToggleAbleButton></ToggleAbleButton>
      </ToggleAbleSwitch>
    </Container>
  );
};

export default ToggleButtonV2Cp;

const Container = styled.div`
  width: 70px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleAbleSwitch = styled.label`
  width: 80%;
  height: 8%;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #bbbbbb;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in;
`;

export const ToggleAbleButton = styled.span`
  width: 36%;
  height: 600%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #bbbbbb;
  transition: all 0.2s ease-in;
`;
export const AbleCheckbox = styled.input`
  &:checked + ${ToggleAbleSwitch} {
    background-color: ${(props) => props.theme.color.main};
    ${ToggleAbleButton} {
      left: calc(100% - 20px);
      background-color: ${(props) => props.theme.color.main};
    }
  }
`;
