import styled from "styled-components";
import { ContainerStyled } from "../utils/styles";
import Title from "../atoms/Title";
import ProjectItem from "./ProjectItem";
import ProjectSlider from "./ProjectSlider";
import { useState } from "react";
import { projectArr } from "../utils/data";
import { IProjectArr } from "../interface/IProjectArr";

const ProjectWrpper = styled(ContainerStyled)`
  .projects {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const Project = () => {
  const [isSlider, setIsSlider] = useState<boolean>(false);

  const onSlider = () => {
    setIsSlider(true);
  };

  const unSlider = () => {
    setIsSlider(false);
  };

  return (
    <ProjectWrpper>
      <Title title="프로젝트" imgUrl="/notebook.png" />
      <div className="projects">
        {projectArr.map((item: IProjectArr) => {
          return <ProjectItem {...item} onSlider={onSlider} key={item.title} />;
        })}
      </div>
      {isSlider && (
        <ProjectSlider
          imgs={["/recipe.png", "/shopping.png", "/poke.png"]}
          unSlider={unSlider}
        />
      )}
    </ProjectWrpper>
  );
};

export default Project;
