import styled from "styled-components";

const AboutContentDiv= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightpink;
`

export default function Content() {
    return (
        <AboutContentDiv>
            <h1>About</h1>
            <p> Something about me</p>
        </AboutContentDiv>
    )
}