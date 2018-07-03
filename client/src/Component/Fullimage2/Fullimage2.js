import React from "react";
import "./Fullimage2.css";

const Fullimage2 = props => 
<a href="/WifiBridge" className="fullImageDiv" id="fullImageDiv2">
<h1 className="header">Wifi <span id="yellow">Bridge</span></h1>
    <img className="fullImagePic2" src={props.children}/>
</a>

export default Fullimage2;