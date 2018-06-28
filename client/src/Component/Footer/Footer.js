import React from "react";
import "./Footer.css";

const Footer = props =>
    <div class="" id="footerDiv">
        <div class="row" id="">
            <div class="col-sm-3"></div>
            <div class="col-sm-6" id="disclaimerDiv">
                <p>Cell phones are not included</p>
            </div>
            <div class="col-sm-3"></div>
        </div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-3 list">
                <h3>Shop and Learn</h3>
                <ul>
                    <li class="listItem"><a class="linkItem">The MeatStick</a></li>
                    <li class="listItem"><a class="linkItem">Wifi Bridge</a></li>
                    <li class="listItem"><a class="linkItem">MeatStick App</a></li>
                </ul>
            </div>
            <div class="col-sm-3 list">
                <h3>More About MeatStick</h3>
                <ul class="list">
                    <li class="listItem"><a class="linkItem">About</a></li>
                    <li class="listItem"><a class="linkItem">FAQ</a></li>
                    <li class="listItem"><a class="linkItem">Support</a></li>
                    <li class="listItem"><a class="linkItem">Social Media</a></li>
                </ul>
            </div>
            <div class="col-sm-3"></div>
        </div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6" id="copyRightDiv">
                <span id="copyrightLine">Copyright &copy; 2017 The MeatStick. All rights reserved.</span>
                <a class="policyList">Policy</a>
                <a class="policyList">Terms of Use</a>
                <a class="policyList" id="lastPolicyList">Sales and Refunds</a>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>

export default Footer;
