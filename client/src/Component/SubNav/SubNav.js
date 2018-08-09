import React from "react";
import "./SubNav.css";

const SubNav = props => 

<nav>
<div className="nav-wrapper subNav">
  <ul id="nav-mobile" className="hide-on-med-and-down">
    <li><a className="subNavText mainSubNav" id={ props.id } href="#">{ props.title }</a></li>
    <li><a className="subNavText" id="overview" href="#overviewTitle">Overview</a></li>
    <li><a className="subNavText" id="specs" href="#specsTitle">Specs</a></li>
  </ul>
</div>
</nav>

export default SubNav;