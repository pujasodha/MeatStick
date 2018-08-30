import React from "react";
import "./Navbar.css";
import logo from "../../Images/icons/logo1028_preview.png";
import bag from "../../Images/icons/shopping-bag.png";

const Navbar = props => 

<nav>
<div className="nav-wrapper">
  <a  href="/"><img id="logo" src={logo}></img></a>
  <a href="#" data-target="mobile-demo" class="sidenav-trigger" id="hamburger"><i class="material-icons">menu</i></a>
  <ul id="nav-mobile" className="hide-on-med-and-down">
    <li className="navbarlist"><a className="navText" href="/MeatStick">The MeatStick</a></li>
    <li className="navbarlist"><a className="navText" href="/WifiBridge">Wifi Bridge</a></li>
    <li className="navbarlist"><a className="navText" href="/Support">Support</a></li>
    <li className="navbarlist"><a className="navText" href="#">Blog</a></li>
  </ul>
  <a href="/Cart"><img id="bag" src={bag}></img></a>
</div>
</nav>

export default Navbar;