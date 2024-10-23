import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #4b473e;
  color: white;
  padding: 10px;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
        <h1 id="name">Tsz Kit Wong</h1>
        <p id="small-title">My Online Resume</p>
    </HeaderWrapper>
  );
}