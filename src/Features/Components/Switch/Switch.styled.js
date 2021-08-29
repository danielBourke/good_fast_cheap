import styled from "styled-components";
import { darken } from "polished";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 24px;
  border-radius: 100px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  position: relative;
  transition: background-color 0.2s;
  background-color: ${({ activeColor, toggled }) =>
    toggled ? `${darken(0.1, activeColor)}` : "gray"};
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: -6px;
  left: -5px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.6s;
  background: ${({ activeColor, toggled }) =>
    toggled ? `${activeColor}` : "#cfcfcf"};
  transform: ${({ toggled }) => toggled && `translateX(-90%)`};
  left: ${({ toggled }) => toggled && `calc(100% )`};
  box-shadow: 0 11px 8px -9px rgba(10, 10, 10, 0.29);
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 120px 120px;
  grid-template-rows: 60px;
`;

export const SwitchWrapper = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  text-align: left;
  right: 0;
  color: gray;
`;