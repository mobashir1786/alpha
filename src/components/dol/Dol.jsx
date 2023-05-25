import React from 'react';
import "./dol.css";

function Dol() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const contact = e.target[3].value;
        const company = e.target[4].value;
        const state = e.target[5].value;
        const describe = e.target[6].value;
        const distributer = e.target[7].value;
        const information = e.target[8].value;
        console.log(firstName, lastName, email, contact, company, state, describe, distributer, information);
        alert(`thanks ${firstName} ${lastName} team will contact you soon`)
    }
    return (
        <div className='dol'>
            <div className="dolLeft">
                <div className='dolLeftHeading'>DOL Max Overlaminate Films</div>
                <div className='dolLeftSubHeading'>Printed graphics deserve maximum protection, DOL Max is the solution.</div>
                <div>Printed graphics deserve maximum protection, DOL Max is the solution.</div>
                <h2 className='dolLeftHeading2'>Features & Benefits:</h2>
                <div className='listitem'>
                    <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
                    <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
                    <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
                </div>
                <button>Inquire now </button>
            </div>
            <div className='dolRight'>
                <form onSubmit={handleSubmit}>
                    <div className="formheadings">
                        <div className='formHeading'>Connect with us</div>
                        <div className='formSubHeading'>for outstanding protective overlaminates</div>
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" />
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" />
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="Number">Number</label>
                        <input type="number" />
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="company">Company</label>
                        <input type="text" />
                    </div>
                    <div className='formLabelInput'>
                        <label htmlFor="state">State</label>
                        <select id="state" name="state">
                            <option value="Bihar">Bihar</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Kolkato">Kolkato</option>
                        </select>
                    </div>
                    <div className='describeYourself formLabelInput'>
                        <label htmlFor="discribe">How would you describe yourself?</label>
                        <select id="descYourself" name="state">
                            <option value="installer">Installer</option>
                            <option value="xyz">XYZ</option>
                            <option value="abc">ABC</option>
                            <option value="wxy">WXY</option>
                        </select>
                    </div>
                    <div className='formLabelInput preferedDistributer'>
                        <label htmlFor="distributer">Preferred Distributor:</label>
                        <select id="distributer" name="state">
                            <option value="aerotect">Aerotect</option>
                            <option value="xyz">XYZ</option>
                            <option value="abc">ABC</option>
                            <option value="wxy">WXY</option>
                        </select>
                    </div>

                    <div className='formLabelInput additionelInformation'>
                        <label htmlFor="info">Additional Information</label>
                        <textarea />
                    </div>

                    <div className='formcheckbox'>
                        <input type="checkbox" />
                        <label htmlFor="termcond">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
                    </div>
                    <button className='formbtn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Dol