import styled from "styled-components";
import { mainColor } from "../utils/color";

const FooterWrap = styled.footer`
  width: 100%;
  background-color: ${mainColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 20px 0;

  span {
    margin: 0 10px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <strong>Phone</strong>: 010-7202-9508 <span>|</span>
      <strong>Email</strong>: kigpand@gamil.com
    </FooterWrap>
  );
};

export default Footer;
