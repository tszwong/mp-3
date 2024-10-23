import styled from "styled-components";

const AboutContentDiv= styled.div`
    display: flex;
    flex-direction: column;
    background-color: darkgray;
    color: white;
    margin: auto;
    text-align: center;
    width: 70%;
    overflow-y: auto;

    font-size: calc(12px + 0.5vw);
    p {
        font-size: calc(12px + 0.5vw);
    }

    .imfrLv {
        width: 100% !important;
        padding: 0px !important;
    }

    padding-left: 2vw !important;
    padding-top: 2vw !important;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 4vw;

        font-size: calc(10px + 1vw);
        
        p {
            font-size: calc(10px + 1vw);
        }
    }
`

const ProfileImage = styled.img`
    width: 300px;
    height: auto;
    margin: 0 auto;
`;

export default function Home() {
    return (
        <AboutContentDiv>
            <ProfileImage src="/IMG_1157.JPG" alt="Profile" />
            <p>
                My name is Tsz Kit Wong and I am a senior Computer Science student at Boston University.
                I would like to work in a software engineer or DevOps engineer role or pursue
                a masters in Computer Science upon graduation.
            </p>
            <p>
                Welcome to my website, here you will find my educational, work, volunteer history, and more.
            </p>
        </AboutContentDiv>
    )
}