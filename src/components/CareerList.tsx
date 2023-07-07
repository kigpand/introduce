import styled from "styled-components";

interface ICareerList {
  company: string;
  date: string;
}

const ListStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const CareerList = ({ company, date }: ICareerList) => {
  return (
    <ListStyled>
      <strong>{company}</strong>
      <div>{date}</div>
    </ListStyled>
  );
};

export default CareerList;
