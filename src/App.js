import Switch from 'Features/Components/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { returnCorrectConstant } from './app/utils/reducerUtil';
import styled from "styled-components";

const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const dispatch = useDispatch()
  const { gfc } = useSelector((state) => state)
  const { good, fast, cheap } = gfc
  const handleGFCChange = (optionState) => {
    dispatch({ type: returnCorrectConstant(optionState, gfc), payload: optionState })
  }
  return (
    <Root>
      <Switch id="testtertch"
        label="good"
        activeColor="#00b455"
        toggled={good}
        onChange={() => handleGFCChange("good")} />
      <Switch id="test-ch"
        label="fast"
        activeColor="#4890ff"
        toggled={fast}
        onChange={() => handleGFCChange("fast")} />
      <Switch id="test-"
        label="cheap"
        activeColor="#d84855"
        toggled={cheap}
        onChange={() => handleGFCChange("cheap")} />
    </Root>
  );
}

export default App;
