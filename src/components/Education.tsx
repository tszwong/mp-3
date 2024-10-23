import styled from "styled-components";

const AboutContentDiv= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkgray;
    color: white;
    font-size: calc(12px + 0.5vw);
    p {
        font-size: calc(12px + 0.5vw);
    }

    .imfrLv {
        width: 100% !important;
        padding: 0px !important;
    }

    @media screen and (max-width: 750px) {
        width: 90%;
        padding: 4vw;

        font-size: calc(10px + 1vw);
        
        p {
            font-size: calc(10px + 1vw);
        }
    }
`

export default function Education() {
    return (
        <AboutContentDiv>
                <br /><br />
                <h3 id="college">
                    Boston University, College of Arts and Sciences, Boston, MA
                </h3><br />
                <p>Bachelor of Arts, Computer Science -- 2025</p>
                <br />
                <p>
                    <strong>Awards/Honors:</strong> Dean's List, Upsilon Pi
                    Epsilon Honor Society, Tri-Alpha Honor Society<br /><br />
                    <strong>Relevant Coursework:</strong> Intro to CS I
                    (Python), Intro to CS II (Java, OOP, Data Structures),
                    Computer Systems, Web Development, Calc I, Discrete
                    Mathematics, Linear Algebra, Probability & Statistics,
                    Algorithms, Software Engineering, Machine Learning, Database
                    Systems
                </p>
        </AboutContentDiv>
    );
}