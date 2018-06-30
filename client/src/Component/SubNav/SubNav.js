import React from "react";
import "./SubNav.css";

const SubNav = props => 

<nav>
<div class="nav-wrapper subNav">
  <ul id="nav-mobile" class="hide-on-med-and-down">
    <li><a class="subNavText" id="subNavName" href="#">The MeatStick</a></li>
    <li><a class="subNavText" id="overview" href="#">Overview</a></li>
    <li><a class="subNavText" id="specs" href="#">Specs</a></li>
  </ul>
</div>
</nav>

export default SubNav;