import styled from 'styled-components';

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkgray;
    color: white;
    width: 70%;
    padding: 2vw;
    overflow-y: auto;
    font-size: calc(12px + 0.5vw);
    p {
        font-size: calc(12px + 0.5vw);
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

export default function Volunteer () {
    return (
        <AboutContentDiv>
            <main>
                <Row>
                    <h3>Contact Information & Links</h3>
                </Row>
                <Content>
                    <ul>
                        <li><a href="https://linkedin.com/in/tszwong">LinkedIn - Tsz Kit Wong</a></li>
                        <li><a href="https://github.com/tszwong">Github - tszwong</a></li>
                        <li>email - wongt@bu.edu</li>
                    </ul>
                </Content>
                <Row>
                    <h4>TechTogether Boston</h4>
                    <h5>Volunteer Staff</h5>
                    <h5>Oct - Dec 2022</h5>
                </Row>
                <Content>
                    <ul>
                        <li>Provided hackers with assistance and connect them with the right resources</li>
                        <li>Answered logistical questions and general administrative duties</li>
                    </ul>
                </Content>
                <Row>
                    <h4>Yale New Haven Hospital</h4>
                    <h5>Youth Volunteer</h5>
                    <h5>March – April 2024</h5>
                </Row>
                <Content>
                    <ul>
                        <li>Scanned specimens and logged data into the database</li>
                        <li>Organized/delivered items, operated delivery robot cart</li>
                        <li>Assisted in packaging medications for delivery</li>
                    </ul>
                </Content>
            </main>
        </AboutContentDiv>
    );
};
