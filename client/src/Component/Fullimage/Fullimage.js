import React from "react";
import "./Fullimage.css";
import title from "../../Images/titleImage.png"

const Fullimage = props => 
<a href="#" class="fullImageDiv">
    <img id="title" src={ title }/>
    <img class="fullImagePic" src={props.children}/>
</a>
export default Fullimage;