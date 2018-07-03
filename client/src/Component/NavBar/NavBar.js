import React from "react";
import "./Navbar.css";
import logo from "../../Images/icons/logo1028_preview.png";
import bag from "../../Images/icons/shopping-bag.png";

const Navbar = props => 

<nav>
<div class="nav-wrapper">
  <a  href="/"><img id="logo" src={logo}></img></a>
  <ul id="nav-mobile" class="hide-on-med-and-down">
    <li><a class="navText" href="/MeatStick">The MeatStick</a></li>
    <li><a class="navText" href="/WifiBridge">Wifi Bridge</a></li>
    <li><a class="navText" href="/Support">Support</a></li>
    <li><a class="navText" href="#">Blog</a></li>
  </ul>
  <img href="/Cart" id="bag" src={bag}></img>
</div>
</nav>

export default Navbar;