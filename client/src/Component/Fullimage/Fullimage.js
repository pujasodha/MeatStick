import React from "react";
import "./Fullimage.css";

const Fullimage = props => 
<a href="#" class="fullImageDiv">
    <img class="fullImagePic" style={props.style} src={props.children}/>
</a>
export default Fullimage;