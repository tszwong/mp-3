import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    width: 30%;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 12vh;
    align-items: center;

    @media screen and (max-width: 750px) {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        padding-top: 0;
        height: 5vh;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: calc(12px + 0.5vw);
    margin: 4vh 1vh;
    padding: 0.5vh 0.5vh;
    background-color: cornsilk;
    border: 5px solid lightgoldenrodyellow;
    width: 80%;
    text-align: center;

    @media screen and (max-width: 750px) {
        margin: 1vh auto;
        width: auto;
        padding: 0.5vh 1vw;
    }
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/leadership">Leadership</NavLink>
            <NavLink to="/volunteer">Volunteer</NavLink>
        </NavbarContainer>
    );
}