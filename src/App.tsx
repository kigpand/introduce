import styled from "styled-components";
import Main from "./components/Main";
import { bgColor } from "./utils/color";
import Career from "./components/Career";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Personality from "./components/Personality";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

function App() {
  return (
    <AppWrapper>
      <Main />
      <Personality />
      <Career />
      <Stack />
      <Project />
    </AppWrapper>
  );
}

export default App;
