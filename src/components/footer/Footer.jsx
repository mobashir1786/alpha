import React from 'react';
import './footer.css';
import footerlogo from "../../assets/avery2.png"

function Footer() {
    return (
        <div className='footer'>
            <div className="footertop">
                <div className="footer1">
                    <div>Best solutions from</div>
                    <img src={footerlogo} alt="logo Icon" />
                </div>
                <div className="footer2">
                    <div>DOL Max Overlaminate Films</div>
                    <div>Why us</div>
                    <div>Enquire now</div>
                </div>
                <div className="footer3">
                    <div>Avery Dennison Overlaminate </div>
                    <div>Avery Dennison Overlaminate Films </div>
                    <div>Avery Dennison Digital Overlaminate Films</div>
                    <div>Avery Dennison DOL Max</div>
                </div>
                <div className="footer4">
                    <div>Overlaminate</div>
                    <div>Overlaminate Films</div>
                    <div>Digital Overlaminate Films</div>
                </div>
            </div>
            <div className="footerbottom">
                © 2023 Avery Dennison Label Packaging Material. All rights reserved.
            </div>
        </div>
    )
}

export default Footer