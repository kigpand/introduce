import styled from "styled-components";
import CareerDetail from "./CareerDetail";
import { ICareerArr } from "../interface/ICareerArr";
import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

const ListStyled = styled.li`
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .company {
      cursor: pointer;
      display: flex;
      align-items: center;

      .arrow {
        margin-right: 5px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
  margin: 20px 0;
`;

const CareerList = ({ company, date, detail }: ICareerArr) => {
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const changeDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <ListStyled>
      <div className="title">
        <strong className="company" onClick={changeDetail}>
          {isDetail ? (
            <BsFillCaretDownFill className="arrow" />
          ) : (
            <BsFillCaretRightFill className="arrow" />
          )}
          {company}
        </strong>
        <div>{date}</div>
      </div>
      {isDetail && <CareerDetail details={detail} />}
    </ListStyled>
  );
};

export default CareerList;
