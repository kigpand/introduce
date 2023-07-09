import styled from "styled-components";
import { fontColor } from "../utils/color";
import MainIntro from "./MainIntro";
import MainList from "./MainList";

const MainWrapper = styled.section`
  margin: 100px 0 50px 0;
  color: ${fontColor};
  position: relative;
  bottom: -20px;
  width: 50%;
  display: flex;
  align-items: start;
  flex-direction: column;

  .img {
    height: 150px;
    object-fit: contain;
    background-color: white;
    border-radius: 50%;
  }

  .intro {
    width: 100%;
    display: flex;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const Main = () => {
  return (
    <MainWrapper>
      <img src="/memotecon.png" alt="memo" className="img" />
      <h1>저를 소개합니다.</h1>
      <div className="intro">
        <MainIntro />
        <MainList />
      </div>
    </MainWrapper>
  );
};

export default Main;
