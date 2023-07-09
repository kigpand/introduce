import styled from "styled-components";
import Main from "./components/Main";
import { bgColor } from "./utils/color";
import Career from "./components/Career";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Personality from "./components/Personality";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppWrapper = styled.main`
  width: 100vw;
  height: 100%;
  background-color: ${bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: fadeIn 0.5s linear forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      bottom: -20px;
    }

    100% {
      opacity: 1;
      bottom: 0px;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Personality />
      <Career />
      <Stack />
      <Project />
      <Footer />
    </AppWrapper>
  );
}

export default App;
