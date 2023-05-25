import React from 'react';
import './banner.css';
import logo from "../../assets/avery.png";
import tic from "../../assets/bannertic.png";
import shild from "../../assets/bannershild.png";
import finish from "../../assets/bannerfinish.png";

function Banner() {
    return (
        <div className='banner'>
            <div className="bannerLeft">
                <div className="bannerEle1"><img src={logo} alt="Logo" /></div>
                <div className="bannerEle2">Take your graphics protection to the next level with DOL Max overlaminates</div>
                <div className="bannerEle3">Pair with MPI 1105 wrapping film for ramped up protection</div>
                <div className="bannerEle4">
                    <div className="bannerElement4logo"><img src={tic} alt="icone" /></div>
                    <div className="bannerElement4logo"><img src={shild} alt="icone" /></div>
                    <div className="bannerElement4logo"><img src={finish} alt="icone" /></div>
                </div>
            </div>
            <div className="bannerRight"></div>
        </div>
    )
}

export default Banner