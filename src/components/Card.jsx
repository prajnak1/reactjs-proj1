import React from "react";

const Card = (props) => {
    return (
        
            <div className = "container">
                <div className = "Card">
                    <h2>{props.name}</h2>
                    <img src = {props.image}></img>
                    <a href={props.link}>
                        <button>Click here</button>
                    </a>
                </div>
            </div>
        
        
    )
    
        
}

export default Card;