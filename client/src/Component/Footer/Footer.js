import React from "react";
import "./Footer.css";

const Footer = props =>
    <div className="" id="footerDiv">
        <div className="row footerRow">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" id="disclaimerDiv">
                <p id="phonesTxt">Cell phones are not included</p>
            </div>
            <div className="col-sm-3"></div>
        </div>
        <div className="row" id="listRow">
            <div className="col-sm-3"></div>
            <div className="col-sm-3 list" id="shopLearnDiv">
                <h3 id="shopLearnTxt">Shop and Learn</h3>
                <ul>
                    <li className="listItem"><a className="linkItem" href="/MeatStick">The MeatStick</a></li>
                    <li className="listItem"><a className="linkItem" href="/WifiBridge">Wifi Bridge</a></li>
                    <li className="listItem"><a className="linkItem" href="/BBQSet">BBQ Super Set</a></li>
                    <li className="listItem"><a className="linkItem">MeatStick App</a></li>
                </ul>
            </div>
            <div className="col-sm-3 list" id="moreCol">
                <h3 id="footerTitles2">More About MeatStick</h3>
                <ul className="list">
                    <li className="listItem"><a href="/About" className="linkItem">About</a></li>
                    <li className="listItem"><a href="/Support" className="linkItem">Support</a></li>
                    <li className="listItem"><a className="linkItem">Social Media</a></li>
                </ul>
            </div>
            <div className="col-sm-3"></div>
        </div>
        <div className="row" id="copyRightRow">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" id="copyRightDiv">
                <span id="copyrightLine">Copyright &copy; 2017 The MeatStick. All rights reserved.</span>
                <a href="/PrivacyPolicy" className="policyList" id="privacyPolicyTxt">Privacy Policy</a>
                <a href="/Terms" className="policyList" id="termsConditionsTxt">Terms & Conditions</a>
                <a className="policyList" id="lastPolicyList">Sales and Refunds</a>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>

export default Footer;
