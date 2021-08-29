import React from "react";
import { Switch } from "../";
import { fireEvent, render } from "@testing-library/react";

const handleOnClick = jest.fn();
test("Clicking on the switch fires onChange prop", async () => {
  const { getByTestId } = render(
    <Switch
      label="good"
      activeColor="#57cf77"
      toggled={false}
      onChange={() => handleOnClick()}
    />
  );
  const input = getByTestId("input");
  fireEvent.click(input);
  expect(handleOnClick).toHaveBeenCalled();
});
