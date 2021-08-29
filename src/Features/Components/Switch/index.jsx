import React from "react";
import { SwitchButton,SwitchWrapper, SwitchInput, SwitchLabel, Wrapper } from "./Switch.styled";

export const Switch = ({ id, label, activeColor, toggled, onChange }) => {
  return (
    <Wrapper>
      <div>
        <SwitchInput
          id={id}
          type="checkbox"
          checked={toggled}
          onChange={onChange}
          data-testid="input"
        />
        <SwitchLabel
          activeColor={activeColor}
          toggled={toggled}
          htmlFor={id}
        >
          <SwitchButton
            toggled={toggled}
            activeColor={activeColor}
          />
        </SwitchLabel>
      </div>
      <SwitchWrapper>{label}</SwitchWrapper>
    </Wrapper>
  );
};

export default Switch;
