import React from "react";
import "./Fullimage.css";
import title from "../../Images/titleImage.png"

const Fullimage = props => 
<a href="/MeatStick" className="fullImageDiv">
    <img id="title" src={ title }/>
    <p className="description">Perfect Steak, Every Time.</p>
    <img className="fullImagePic" src={props.children}/>
</a>
export default Fullimage;