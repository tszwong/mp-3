import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #4b473e;
  color: white;
  padding: 10px;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
        <p>All Rights Reserved by Tsz Kit Wong <a href="">Credits</a> &#169;</p>
    </FooterWrapper>
  );
}