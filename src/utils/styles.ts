import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: 50%;
  margin-top: 50px;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    cursor: pointer;
  }
`;
