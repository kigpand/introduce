import styled from "styled-components";

interface IStackList {
  title: string;
  text: string;
}

const ListStyled = styled.li`
  margin-bottom: 20px;

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .text {
    margin-top: 5px;
    font-size: 14px;
  }
`;

const StackList = ({ title, text }: IStackList) => {
  return (
    <ListStyled>
      <div className="title">{title}</div>
      <div className="text">- {text}</div>
    </ListStyled>
  );
};

export default StackList;
