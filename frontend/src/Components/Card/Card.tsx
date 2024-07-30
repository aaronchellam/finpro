import React from "react";
import "./Card.css";

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img
                src="https://pngimg.com/d/apple_logo_PNG19688.png"
                alt="Image"
            />
            <div className="details">
                <h2>AAPL</h2>
                <p>£110</p>
            </div>
            <p className="info">
                dicant ne natoque feugait morbi adolescens ne prompta vivendo mutat
            </p>
        </div>
    )
}



export default Card;