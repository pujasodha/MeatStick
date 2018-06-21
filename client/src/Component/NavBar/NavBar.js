import React from "react";
import "./Navbar.css";
import logo from "../../Images/icons/logo1028_preview.png";
import bag from "../../Images/icons/shopping-bag.png";

const Navbar = props => 
<nav>
    <img id="logo" src={logo}/>
    <div id="navDiv">
    <span class="navText">The MeatStick</span>
    <span class="navText"> Wifi Bridge </span>
    <span class="navText"> Support </span>
    <span class="navText">Blog </span>
    </div>
    <img id="bag" src={bag}/>
</nav>

export default Navbar;