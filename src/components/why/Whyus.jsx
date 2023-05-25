import React from 'react';
import './why.css';
import why1 from '../../assets/why1.png'
import why2 from '../../assets/why2.png'
import why3 from '../../assets/why3.png'
import why4 from '../../assets/why4.png'

function Whyus() {
    return (
        <div className='whyus'>
            <div className="whyLeft"></div>
            <div className="whyRight">
                <div className='whyrightheading'>Why us?</div>
                <div className='whyCards'>
                    <div className="whycard">
                        <div className="whycardImg"><img src={why1} alt="icons" /></div>
                        <div className="whyCardDesc">
                            <div className='whyiconheding'>Quality Products</div>
                            <div className='whyiconDesc'>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</div>
                        </div>
                    </div>
                    <div className="whycard">
                        <div className="whycardImg"><img src={why2} alt="icons" /></div>
                        <div className="whyCardDesc">
                            <div className='whyiconheding'>Multiple Options</div>
                            <div className='whyiconDesc'>We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</div>
                        </div>
                    </div>
                    <div className="whycard">
                        <div className="whycardImg"><img src={why3} alt="icons" /></div>
                        <div className="whyCardDesc">
                            <div className='whyiconheding'>Expertise and Support</div>
                            <div className='whyiconDesc'>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</div>
                        </div>
                    </div>
                    <div className="whycard">
                        <div className="whycardImg"><img src={why4} alt="icons" /></div>
                        <div className="whyCardDesc">
                            <div className='whyiconheding'>Durability Assurance</div>
                            <div className='whyiconDesc'>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</div>
                        </div>
                    </div>
                </div>
                <button className='requestACallback'>Request a call back</button>
            </div>
            <div className="mobileimage"></div>
        </div>
    )
}

export default Whyus