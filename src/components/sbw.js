import React from "react";
import "./sbw.css";
import sbwimg from "./images/sbw.jpg";

export default function(){
    return(
        <div className="container sbw">
            <div className="row">
                <div className="col-lg-6 sbwleft">
                    <div className="sbwh">
                        <h1><b>SCIENCE BEHIND WORKOUTS</b></h1>
                    </div>
                    <div >
                        <button type="button" class="btn btn-outline-secondary sbwbtn">know more</button>
                    </div>                  
                </div>
                <div className="col-lg-6 sbwright">
                    <img className="sbwimg" src={sbwimg}></img>
                </div>
            </div>
        </div>
    );
}