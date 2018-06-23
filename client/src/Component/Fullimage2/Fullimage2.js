import React from "react";
import "./Fullimage2.css";

const Fullimage2 = props => 
<a href="#" class="fullImageDiv" id="fullImageDiv2">
<h1 class="header">Wifi <span id="yellow">Bridge</span></h1>
    <img class="fullImagePic2" src={props.children}/>
</a>

export default Fullimage2;