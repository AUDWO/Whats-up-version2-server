import {
  CheckUserInfoFormIcon,
  SatisfiedUserInfoFormIcon,
} from "@components/icons/SignIcons";
import styled from "styled-components";

export const Requests = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

export const Satisfied = styled.div`
  color: #14b886;
  font-size: 14px;
  margin-top: 10px;
`;

export const Label = styled.div`
  display: flex;
  height: 85px;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 20px;
  color: #acacac;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  padding-left: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.main};
  }
`;

export const CheckUserIcon = styled(CheckUserInfoFormIcon)`
  position: absolute;
  right: 2%;
  top: 35%;
  font-size: 25px;
  color: #dee2e6;
  cursor: pointer;
`;

export const SatisfiedIcon = styled(SatisfiedUserInfoFormIcon)`
  position: absolute;
  right: 2%;
  top: 35%;
  font-size: 25px;
  color: #dee2e6;
  cursor: pointer;
  color: #00ccaa;
`;
