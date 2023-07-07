import styled from "styled-components";
import Title from "../atoms/Title";
import CareerList from "./CareerList";
import { ContainerStyled } from "../utils/styles";

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
        <CareerList company="다비오" date="2021.11.01 ~ 2023.02.28" />
        <CareerList
          company="창소프트아이앤아이"
          date="2021.04.01 ~ 2021.09.30"
        />
      </ul>
    </CareerStyled>
  );
};

export default Career;
