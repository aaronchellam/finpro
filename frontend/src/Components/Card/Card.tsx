import React from "react";
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;

}
// const functionName: functionType = ({parameters}: parametersType): functionReturnType
const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
    return (
        <div className="card">
            <img
                src="https://cdn.pixabay.com/photo/2024/04/29/00/07/pirates-8726523_640.jpg"
                alt="Image"
            />
            <div className="details">
                <h2>{companyName} ({ticker})</h2>
                <p>£{price}</p>
            </div>
            <p className="info">
                dicant ne natoque feugait morbi adolescens ne prompta vivendo mutat
            </p>
        </div>
    )
}


export default Card;