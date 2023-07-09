import styled from "styled-components";
import Title from "./Title";
import CareerList from "./CareerList";
import { ContainerStyled } from "../utils/styles";
import { careerArr } from "../utils/data";
import { ICareerArr } from "../interface/ICareerArr";

const CareerStyled = styled(ContainerStyled)`
  .list {
    list-style: none;
    padding: 0;
  }
`;

const Career = () => {
  return (
    <CareerStyled>
      <Title title="경력(1년 11개월)" imgUrl="/career.png" />
      <ul className="list">
        {careerArr.map((item: ICareerArr) => {
          return <CareerList {...item} key={item.company} />;
        })}
      </ul>
    </CareerStyled>
  );
};

export default Career;
