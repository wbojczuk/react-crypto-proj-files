import React from "react";
export default function Card(props){
    return(
        <div id={`card${props.rank}`} className="card">
            <div className="rank">{props.rank}</div>
            <img src={props.img} alt="Crypto Logo" />
            <div className="title">{props.name}</div>
            <div className="price">${props.price}</div>
        </div>
    )
}