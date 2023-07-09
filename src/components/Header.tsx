import styled from "styled-components";
import { mainColor } from "../utils/color";
import { useState } from "react";
import Second from "./Second";

const HeaderWrap = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${mainColor};
  position: absolute;
  top: 0;

  .second {
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    right: 50px;
    animation: scale 0.8s infinite alternate linear;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

const Header = () => {
  const [isSecond, setIsSecond] = useState<boolean>(false);

  const closeSecond = () => {
    setIsSecond(false);
  };

  return (
    <HeaderWrap>
      {isSecond && <Second closeSecond={closeSecond} />}
      <div className="second" onClick={() => setIsSecond(true)}>
        2번 과제 결과를 보실려면 클릭하세요.
      </div>
    </HeaderWrap>
  );
};

export default Header;
