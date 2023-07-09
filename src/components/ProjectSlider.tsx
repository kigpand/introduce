import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ModalStyled } from "../utils/styles";

interface IProject {
  imgs: string[];
  unSlider: () => void;
}

const SliderComponent = styled(Slider)`
  position: relative;
  width: 600px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background-color: white;
    width: 100%;
    height: 450px;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: 300px;

    img {
      width: 400px;
      height: 300px;
    }
  }
`;

const ProjectSlider = ({ imgs, unSlider }: IProject) => {
  return (
    <ModalStyled>
      <SliderComponent>
        {imgs.map((item: string, i: number) => {
          return <img src={item} key={i} alt={item}></img>;
        })}
      </SliderComponent>
      <div className="back" onClick={unSlider}></div>
    </ModalStyled>
  );
};

export default ProjectSlider;
