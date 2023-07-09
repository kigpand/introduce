import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";

interface ILinkList {
  text: string;
  link: string;
}

const LinkListStyled = styled.a`
  width: 100px;
  color: gray;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const LinkList = ({ text, link }: ILinkList) => {
  return (
    <LinkListStyled href={link} target="_blank">
      {text === "Github" ? (
        <BsGithub width={25} height={25} style={{ marginRight: "5px" }} />
      ) : (
        <SiNotion width={25} height={25} style={{ marginRight: "5px" }} />
      )}
      {text}
    </LinkListStyled>
  );
};

export default LinkList;
