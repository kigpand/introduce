import styled from "styled-components";
import { mainColor, colorObj } from "../utils/color";
import { IProjectArr } from "../interface/IProjectArr";

interface IProjectItem extends IProjectArr {
  onSlider: (imgs: string[]) => void;
}

const ProjectWrapper = styled.div`
  position: relative;
  width: 47%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${mainColor};
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    top: -10px;
    background-color: lightgray;
  }

  .img {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid ${mainColor};
  }

  .body {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .title {
      font-weight: bold;
    }

    .stacks {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;

      .stack {
        color: white;
        margin-right: 10px;
        margin-top: 5px;
        padding: 3px;
        border-radius: 4px;
      }
    }

    .git,
    .link {
      font-size: 14px;
      text-decoration: none;
      color: #353535;

      &:hover {
        text-decoration: underline;
      }
    }

    .git {
      width: 100px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ProjectItem = ({
  imgUrl,
  title,
  stacks,
  github,
  link,
  onSlider,
}: IProjectItem) => {
  return (
    <ProjectWrapper onClick={() => onSlider(imgUrl)}>
      <img src={imgUrl[0]} alt="img" className="img" />
      <div className="body">
        <div className="title">{title}</div>
        <ul className="stacks">
          {stacks.map((item: string, i: number) => {
            return (
              <li
                className="stack"
                key={i}
                style={{ backgroundColor: colorObj[item] }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <a
          href={github}
          className="git"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          깃허브 바로가기
        </a>
        <a
          href={link}
          className="link"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          사이트 바로가기
        </a>
      </div>
    </ProjectWrapper>
  );
};

export default ProjectItem;
