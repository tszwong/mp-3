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


export default function Work() {
    return (
        <AboutContentDiv>
            <main>
            <Row>
                <h4>
                    Verint Systems, DevOps Engineer Intern
                </h4>
                <h5>
                    May – August 2024
                </h5>
            </Row>
    
            <Content>
                <ul>
                    <li>Led the migration of 70+ on-premise virtual machines and resources from VMware to Microsoft Azure via Jenkins pipelines, enhancing the company's cloud infrastructure capabilities and reducing operational and maintenance costs</li>
                    <li>Leveraged SnowCommander to manage resource usages and requests of 6,000+ VMs across AWS, Azure, and VMware</li>
                </ul>
            </Content>
    
            <br />
            <Row>
                <h4>
                    Boston University Department of PBS, Senior Office Assistant
                </h4>
                <h5>
                    Sep 2022 – May 2024
                </h5>
            </Row>
    
            <Content>
                 <ul>
                    <li>Processed over 350 orders of equipment & supplies for the department using Ariba Guided Buying</li>
                    <li>Implemented Google Sheets and Excel spreadsheets to accurately track and catalog inventory in an efficient, timely manner</li>
                </ul>
            </Content>
        </main>
        </AboutContentDiv>
    )
}