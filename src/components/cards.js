import React from "react";
import "./cards.css";

export default function(props){
    return(
        <div className="pcard">
            <div className="oo">
                <h2><b>{props.name}</b></h2>
                <h4>{props.price} RUPEES</h4>
                <button type="button" class="btn btn-outline-secondary fbtn">Purchase now</button>
            </div>
        </div>
    );
}