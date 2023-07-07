import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

interface IProject {
  imgs: string[];
  unSlider: () => void;
}

const setting: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectSliderWrap = styled.div`
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

const SliderComponent = styled(Slider)`
  position: relative;
  width: 600px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 600px;
    height: 450px;
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
    <ProjectSliderWrap>
      <SliderComponent {...setting}>
        {imgs.map((item: string, i: number) => {
          return <img src={item} key={i} alt={item}></img>;
        })}
      </SliderComponent>
      <div className="back" onClick={unSlider}></div>
    </ProjectSliderWrap>
  );
};

export default ProjectSlider;
