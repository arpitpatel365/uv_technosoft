import React from "react";
import email from './email.png';
import telephone from './telephone.png';
import address from './address.png';
import './Contact.css'

function Contact() {

    return (
        <React.Fragment>
            <br />
            <h1 className='Contact_Heading1'>Contact UV Technosoft</h1>
            <div className="Contact_Details">

                <div className="Contact_IMG"><img src={email} alt="error" /> <span className="Contact_Details_Content">info@uvtechnosoft.com</span> </div>   <br />
                <div className="Contact_IMG"><img src={telephone} alt="error" />  <span className="Contact_Details_Content">+91 1800 233 2030</span> </div>  <br />
                <div className="Contact_IMG"> <img src={telephone} alt="error" />  <span className="Contact_Details_Content">+91 9428137843</span>  </div> <br /><br />
            </div>


            <h5 className="Contact_Address">UV Technosoft Office Address</h5>
            <div className="Contact_Address_Details"><img src={address} alt="error" /> <span>1003, 10th floor, Earth Arise, Near Rockstar club, SP Ring Road, Ahmedabad-380013</span>
            </div>

            <br />
            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.08347252068!2d72.5654253!3d23.0321838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2a1d5031fdf4653!2sAkash%20Technolabs!5e0!3m2!1sen!2sin!4v1666542125257!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="i_frame"></iframe>
            <br /> <br />
        </React.Fragment>
    );
}

export default Contact;