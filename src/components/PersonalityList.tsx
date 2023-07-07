import styled from "styled-components";

interface IPersonalityList {
  title: string;
  text: string;
}

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;

  .title {
    width: 20%;
    font-weight: bold;

    .img {
      width: 20px;
      height: 20px;
    }
  }

  .text {
    width: 80%;
    font-size: 14px;
    margin-left: 50px;
  }
`;

const PersonalityList = ({ title, text }: IPersonalityList) => {
  return (
    <ListWrap>
      <div className="title">
        {title}
        <img src="/star.png" alt="img" className="img" />
      </div>
      <div className="text">{text}</div>
    </ListWrap>
  );
};

export default PersonalityList;
