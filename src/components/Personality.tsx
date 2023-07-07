import styled from "styled-components";
import { ContainerStyled } from "../utils/styles";
import Title from "../atoms/Title";
import PersonalityList from "./PersonalityList";

const PersonalityWrap = styled(ContainerStyled)``;

const Personality = () => {
  return (
    <PersonalityWrap>
      <Title imgUrl="/personality.png" title="저는 이러한 강점이 있어요" />
      <PersonalityList
        title="책임감"
        text="프로젝트를 맡은 동안 스프린트에 차질이 생긴 적이 단 한번도 없었습니다."
      />
      <PersonalityList
        title="소통"
        text="항상 주변 개발자 분들이나 디자이너, 기획자 분들과 꾸준하게 소통을 할려고 하고 피드백을 언제나 환영합니다."
      />
      <PersonalityList
        title="탐구"
        text="새로운 기술, 트렌드를 파악하고 공부해서 적용하는 것을 좋아하고 남들보다 앞서나가기 위해 노력합니다."
      />
    </PersonalityWrap>
  );
};

export default Personality;
