import styled from "styled-components";
import { ICareerDetail } from "../interface/ICareerArr";
import { colorObj } from "../utils/color";

interface IDetail {
  details: ICareerDetail[];
}

const CareerDetailWrap = styled.div`
  font-size: 14px;
  padding: 10px 20px 10px 0;

  .mainTitle {
    margin-bottom: 0;
  }

  .detail {
    margin: 10px 0;

    .stacks {
      margin-top: 8px;
      .stack {
        margin-left: 5px;
        padding: 3px;
        color: white;
        border-radius: 4px;
      }
    }
  }
`;

const CareerDetail = ({ details }: IDetail) => {
  return (
    <CareerDetailWrap>
      <h3 className="mainTitle">주요 업무: </h3>
      {details.map((detail: ICareerDetail, i: number) => {
        return (
          <div className="detail" key={i}>
            <div className="detailTitle">
              {i + 1}: <strong>{detail.title}</strong>
            </div>
            <div className="stacks">
              기술 스택:
              {detail.stack.map((stack: string, j: number) => {
                return (
                  <span
                    className="stack"
                    key={j}
                    style={{ backgroundColor: colorObj[stack] }}
                  >
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </CareerDetailWrap>
  );
};

export default CareerDetail;
