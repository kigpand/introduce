import styled from "styled-components";
import { borderColor } from "../utils/color";

const IntroStyeld = styled.p`
  margin: 0;
  width: 60%;
  padding: 20px 20px 20px 0;
  border-right: 1px solid ${borderColor};
  line-height: 40px;
`;

const MainIntro = () => {
  return (
    <IntroStyeld>
      안녕하세요. 학습을 즐기는 개발자 <strong>김지훈</strong>입니다. 꾸준한
      자기개발을 위해 주 5일 이상 commit을 목표로 개발하고 새로운 기술을
      좋아하며 습득하기 위해 꾸준히 노력합니다. 코드 리뷰와 피드백을 언제나
      환영하는 소통을 즐기는 프론트엔드 개발자입니다.
    </IntroStyeld>
  );
};

export default MainIntro;
