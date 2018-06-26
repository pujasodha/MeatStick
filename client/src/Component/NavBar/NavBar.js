import React from "react";
import "./Navbar.css";
import logo from "../../Images/icons/logo1028_preview.png";
import bag from "../../Images/icons/shopping-bag.png";

const Navbar = props => 

<nav>
<div class="nav-wrapper">
  <img href="#" id="logo" src={logo}></img>
  <ul id="nav-mobile" class="hide-on-med-and-down">
    <li><a class="navText" href="#">The MeatStick</a></li>
    <li><a class="navText" href="#">Wifi Bridge</a></li>
    <li><a class="navText" href="#">Support</a></li>
    <li><a class="navText" href="#">Blog</a></li>
  </ul>
  <img href="#" id="bag" src={bag}></img>
</div>
</nav>

export default Navbar;