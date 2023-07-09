import styled from "styled-components";
import Title from "./Title";
import { ContainerStyled } from "../utils/styles";
import StackList from "./StackList";

const StackStyled = styled(ContainerStyled)`
  .list {
    list-style: none;
    padding: 0;
  }
`;

const Stack = () => {
  return (
    <StackStyled>
      <Title title="기술" imgUrl="/tech.png" />
      <ul className="list">
        <StackList
          title="HTML"
          text="시멘틱 태그를 유연하게 사용할 수 있습니다."
        />
        <StackList
          title="CSS"
          text="CSS 전처리기(Scss), CSS-in-JS(styled-components), Tailwind css 사용과 애니메이션, 반응형 웹에 익숙합니다."
        />
        <StackList
          title="React"
          text="동작원리를 이해하고 렌더링 최소화에 신경쓰며 custom hook, 전역상태관리(Redux, Recoil, Zustand) 사용에 익숙합니다."
        />
        <StackList
          title="Next.js"
          text="렌더링(CSR, SSR, SSG)에 대해 이해했고 Next.js를 활용한 사이트 구현 경험이 있습니다."
        />
        <StackList
          title="Node.js"
          text="간단한 서버 구축과 Rest API를 통한 서버-클라이언트 통신 구현이 가능합니다."
        />
      </ul>
    </StackStyled>
  );
};

export default Stack;
