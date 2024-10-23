import styled from "styled-components";

const AboutContentDiv = styled.div`
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
`;

const Row = styled.div`
    padding-left: 2vw;
`;

const Content = styled.div`
    padding-top: 1vw;
    margin-bottom: 2vw;
`;

export default function Leadership() {
    return (
        <AboutContentDiv>
            <main>
                <Row>
                    <h4>Upsilon Pi Epsilon</h4>
                    <h5>Recruitment Committee Member</h5>
                    <h5>Sep 2023 – Present</h5>
                </Row>
        
                <Content>
                    <ul>
                        <li>1 of 16 members inducted into the IOTA class of Boston University's highly selective computer science honor society</li>
                        <li>Developed and standardized coding interview questions as well as conducting interviews of prospective members</li>
                    </ul>
                </Content>
        
                <br />

                <Row>
                    <h4>Terrier Motorsport</h4>
                    <h5>Electrical Team Project Lead</h5>
                    <h5>Dec 2022 – May 2023</h5>
                </Row>
        
                <Content>
                    <ul>
                        <li>Oversaw project source control and development of the telemetry system for Boston University’s Formula SAE competition car</li>
                        <li>Made executive decisions on project structure, conduct validation test, and coordinate strategies with other project leads</li>
                        <li>Provided leadership and support to a 12-person sub-team to ensure cooperation between members and maximize work efficiency</li>
                    </ul>
                </Content>
            </main>
        </AboutContentDiv>
    );
}
