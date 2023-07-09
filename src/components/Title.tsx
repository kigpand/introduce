import styled from "styled-components";
import { mainColor } from "../utils/color";

interface ITitle {
  title: string;
  imgUrl: string;
}

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${mainColor};

  .img {
    height: 30px;
    object-fit: contain;
    margin-right: 10px;
  }
`;

const Title = ({ title, imgUrl }: ITitle) => {
  return (
    <TitleStyled>
      <img src={imgUrl} alt="img" className="img" />
      <h2>{title}</h2>
    </TitleStyled>
  );
};

export default Title;
