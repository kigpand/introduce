import styled from "styled-components";
import { ModalStyled } from "../utils/styles";

interface ISecond {
  closeSecond: () => void;
}

const SecondWrap = styled(ModalStyled)`
  .secondImg {
    width: 600px;
    height: 600px;
  }
`;

const Second = ({ closeSecond }: ISecond) => {
  return (
    <SecondWrap>
      <img src={"/FrontEnd-Test-Image.png"} alt="img" className="secondImg" />
      <div className="back" onClick={closeSecond} />
    </SecondWrap>
  );
};

export default Second;
