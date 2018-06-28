import React from "react";
import "./HalfImageRow.css";
import AppPic from "../../Images/app.png";
import BBQPic from "../../Images/BBQSuperdark.png";

const HalfImageRow = props => 
<div class="row">
<div class="col-sm-6 halfDiv">
<a href="#" class="halfmageDiv" id="halfmageDiv1">
<h1 class="halfTitle">Meat<span id="yellow">Stick</span> App</h1>
    <img class="halfImagePic" id="halfImagePic1" src={ AppPic }/>
</a>
</div>
<div class="col-sm-6 halfDiv">
<div class="halfImageDiv" id="halfImageDiv2">
<a href="#" class="halfImageDiv" id="">
<h1 class="halfTitle" id="halfTitle2">BBQ <span id="yellow">Set</span></h1>
    <img class="halfImagePic" id="halfImagePic2" src={ BBQPic }/>
</a>
</div>
</div>
</div>

export default HalfImageRow;