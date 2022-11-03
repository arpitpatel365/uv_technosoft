import React from "react";
import {useNavigate} from 'react-router-dom';
import '../CSS/Careers.css';
import Button from 'react-bootstrap/Button';

function Careers() {
    let navigate=useNavigate();
    
    return(
        <React.Fragment>
            <br/>
           <center><h1 className="Careers_heading1">Careers at UV Technosoft</h1></center>  <br/>
           <div className="Careers_div1">
            <h5 className="Careers_Job_Opening">Current Job Openings</h5>
            <br/>
            <ol type="1">
                <li className="Careers_UI">UI/UX Designer</li>
                <div className="UI_UX_Content">
                <div>Expertise : Figma, Adobe XD, Illustrator, Photoshop, InVision Studio</div>
                <div>Experience: 5+ years</div>
                <div>Openings: 2</div>
                <div>Location: Ahmedabad</div>
                </div> 
                <br/>
                
                <Button variant="primary" onClick={(e)=>navigate('/Form')}>Apply Now</Button>{' '}
                <br/><br/>

                <li className="Careers_Shopify">Shopify Developer</li>
                <div className="Shopify_Content">
                <div>Expertise: Shopify</div>
                <div>Experience: 3+ years</div>
                <div>Openings: 2</div>
                <div>Location: Ahmedabad</div>
                </div>
                 <br/>
                <Button variant="primary" onClick={(e)=>navigate('/Form')}>Apply Now</Button>{' '}
                <br/><br/>  

                <li className="Careers_WooCommerce">WooCommerce Developer</li>
                <div className="WooCommerce_Content">
                <div>Expertise: WooCommerce</div>
                <div>Experience: 3+ years</div>
                <div>Openings: 2</div>
                <div>Location: Ahmedabad</div>
                </div>
                 <br/>
                <Button variant="primary" onClick={(e)=>navigate('/Form')}>Apply Now</Button>{' '}
                <br/><br/>  

                <li className="Careers_Magento">Magento Developer</li>
                <div className="Magento_Content">
                <div>Expertise: Magento</div>
                <div>Experience: 3+ years</div>
                <div>Openings: 2</div>
                <div>Location: Ahmedabad</div> <br/>
                </div>
                <Button variant="primary" onClick={(e)=>navigate('/Form')}>Apply Now</Button>{' '}
                <br/><br/>  

                <li className="Careers_BigCommerce">BigCommerce Developer</li>
                <div className="BigCommerce_Content">
                <div>Expertise: BigCommerce</div>
                <div>Experience: 3+ years</div>
                <div>Openings: 2</div>
                <div>Location: Ahmedabad</div> 
                </div>
                 <br/>
                <Button variant="primary" onClick={(e)=>navigate('/Form')}>Apply Now</Button>{' '}
                <br/><br/> 
            </ol>
            </div>
            
        </React.Fragment>
    );
}

export default Careers;