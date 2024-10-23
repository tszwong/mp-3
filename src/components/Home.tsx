import styled from "styled-components";

const AboutContentDiv= styled.div`
    display: flex;
    flex-direction: column;
    background-color: darkgray;
    color: white;
    margin: auto;
    text-align: center;
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
`

const ProfileImage = styled.img`
    width: 300px;
    height: auto;
    margin: 0 auto;
`;

export default function Home() {
    return (
        <AboutContentDiv>
            <ProfileImage src="/public/IMG_1157.JPG" alt="Profile" />
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