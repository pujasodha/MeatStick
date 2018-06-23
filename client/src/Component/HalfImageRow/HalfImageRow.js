import React from "react";
import "./HalfImageRow.css";
import AppPic from "../../Images/app.png";
import BBQPic from "../../Images/BBQSuper.jpg";

const HalfImageRow = props => 
<div class="row">
<div class="col-sm-6">
<a href="#" class="halfmageDiv" id="halfmageDiv1">
<h1 class="">Meat<span id="yellow">Stick</span> App</h1>
    <img class="halfImagePic" id="halfImagePic1" src={ AppPic }/>
</a>
</div>
<div class="col-sm-6">
<a href="#" class="halfImageDiv" id="halfImageDiv2">
<h1 class="">BBQ Set</h1>
    <img class="halfImagePic" id="halfImagePic2" src={ BBQPic }/>
</a>
</div>
</div>

export default HalfImageRow;