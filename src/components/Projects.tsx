import { useState } from "react";
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

const InputContainer =styled.div`
    font-size: calc(8px + 1vw);
`;

const Input = styled.input`
    padding: calc(1px + 1vw) calc(1px + 2vw);
    margin-bottom: 5px;
`;

const Button = styled.button`
    text-align: center;
    background-color:#4b473e;
    color: white;
    padding: calc(2px + 1vw) calc(1px + 1.5vw); 
    margin: 5px;
    border-radius: 5px;
`;


export default function Projects() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [res, setRes] = useState("");

    const handleCalculation = (operation: string) => {
        const first = Number(num1);
        const second = Number(num2);

        if (isNaN(first) || isNaN(second)) {
            alert("Please enter valid numbers");
            setRes("Invalid number");
            return;
        }
    
        let calculationResult;
        switch (operation) {
            case "+":
                calculationResult = first + second;
                break;
            case "-":
                calculationResult = first - second;
                break;
            case "*":
                calculationResult = first * second;
                break;
            case "/":
                if (second === 0) {
                    setRes("Invalid");
                    return;
                }else{
                    calculationResult = first / second;
                }
                break;
            case "**":
                calculationResult = first ** second;
                break;
        }
        setRes(String(calculationResult));
    };

    return (
        <AboutContentDiv>
            <main>
                {/* project 1 */}
                <div className="row">
                    <h4>
                        Immigration Raids Data Collection & Validation Program
                    </h4>
                    <h5>
                        Technical Lead
                    </h5>
                    <h5>
                        March – April 2024
                    </h5>
                </div>
        
                <div className="content">
                    <ul>
                        <li>Led the development of a Python-based data collection program that leveraged Google Search API to dynamically query & retrieve 7000+ articles and employed BeautifulSoup library to efficiently extract and parse text contents from HTML files</li>
                        <li>Integrated filtering and OpenAI's GPT API to validate accuracy of results through natural language processing and successfully refined dataset from 7000+ initial results to ~325 highly relevant articles, enhancing data precision by over 95%</li>
                        <li>Fine-tuned data extraction to handle large datasets, reduce duplication, and increased overall efficiency of program by over 50%</li>
                    </ul>
                </div>
        
                <br />

                <div id="calc-title">
                    <h2>The Calculator</h2>
                </div>
    
                <InputContainer>
                    <p>First Number: <Input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} /></p>
                    <p>Second Number: <Input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} /></p>
                </InputContainer>
        
                <div id="buttons">
                    <Button onClick={() => handleCalculation("+")}> + </Button>
                    <Button onClick={() => handleCalculation("-")}> - </Button>
                    <Button onClick={() => handleCalculation("*")}> * </Button>
                    <Button onClick={() => handleCalculation("/")}> / </Button>
                    <Button onClick={() => handleCalculation("**")}> ** </Button>
                    <Button onClick={() => { setNum1(""); setNum2(""); setRes(""); }}>Clear</Button>
                </div>
                <p id="output" style={{ color: res[0] === "-" ? "red" : "white" }}>{res}</p>
            </main>
        </AboutContentDiv>
    )
}