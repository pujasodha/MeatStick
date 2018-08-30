import React from "react";
import "./HalfImageRow.css";
import AppPic from "../../Images/app.png";
import BBQPic from "../../Images/BBQSuperdark.png";

const HalfImageRow = props =>
    <div className="row" id="halfDivRow">
        <div className="col-sm-6 halfDiv" id="halfDiv1">
            <a href="#" className="halfmageDiv" id="halfmageDiv1">
                <h1 className="halfTitle" id="halfTitle1">Meat<span id="yellow">Stick</span> App</h1>
                <img className="halfImagePic" id="halfImagePic1" src={AppPic} />
            </a>
        </div>
        <div className="col-sm-6 halfDiv" id="halfDiv2">
            <div className="halfImageDiv" id="halfImageDiv2">
                <a href="/BBQSet" className="halfImageDiv" id="">
                    <h1 className="halfTitle" id="halfTitle2">BBQ <span id="yellow">Set</span></h1>
                    <img className="halfImagePic" id="halfImagePic2" src={BBQPic} />
                </a>
            </div>
        </div>
    </div>

export default HalfImageRow;