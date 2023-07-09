import styled from "styled-components";
import LinkList from "./LinkList";

const ListStyled = styled.div`
  width: 40%;
  margin-left: 20px;
  font-size: 20px;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .listHeader {
    width: 100%;
    text-align: end;
    font-size: 14px;
    margin-bottom: 30px;
    font-weight: bold;
  }
`;

const MainList = () => {
  return (
    <ListStyled>
      <div className="listHeader">저는 이렇게 공부해요!</div>
      <LinkList text="Github" link="https://github.com/kigpand" />
      <LinkList
        text="Notion"
        link="https://spiffy-random-a92.notion.site/Front-end-Developer-Jihun-Kim-c7aff4da8b6b4e9689dd4870723ebd1a?pvs=4"
      />
    </ListStyled>
  );
};

export default MainList;
