import React from "react";
import "./SubNav.css";

const SubNav = props => 

<nav>
<div class="nav-wrapper">
  <ul id="nav-mobile" class="hide-on-med-and-down">
    <li><a class="navText" href="#">The MeatStick</a></li>
    <li><a class="navText" href="#">Overview</a></li>
    <li><a class="navText" href="#">Specs</a></li>
  </ul>
  <img href="#" id="" src={props.child}></img>
</div>
</nav>

export default SubNav;