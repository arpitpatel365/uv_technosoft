import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'


function Footer() {
 
    return (
        <React.Fragment>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span className='Footer_S1'>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='/#' className='me-4 text-reset'>
                            <i class="fa fa-facebook"></i>
                            {/* <i class="fa fa-shopify"></i> */}
                        </a>
                            
                        <a href='/#' className='me-4 text-reset'>
                            <i class="fa fa-twitter"></i>

                        </a>

                        <a href='/#' className='me-4 text-reset'>
                        <i class="fa fa-github"></i>
                        </a>

                        <a href='/#' className='me-4 text-reset'>
                            
                            <i class="fa fa-instagram"></i>
                        </a>

                        <a href='/#' className='me-4 text-reset'>
                            <i class="fa fa-linkedin"></i>
                        </a>

                        <a href='/#' className='me-4 text-reset'>
                            <i class="fa fa-youtube"></i>
                        </a>
                            
                    </div>

                </section>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                   <span className='Footer_C1'> UV</span> <span className='Footer_C2'> Technosoft</span>
                                </h6>
                                <p className='Footer_p1'>
                                    We are the premier Ecommerce Website Design and Development Company in India.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                           
                                <p >
                                   <a className='text-reset f_home' href='/#'>
                                        Home
                                    </a>
                                </p>
                               
                               
                                
                                <p>
                                    <a href='#!' className='text-reset f_services'>
                                    Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset f_techStack'>
                                    Tech Stack
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset f_portfolio'>
                                    Portfolio
                                    </a>
                                </p>
                            </MDBCol>

                             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                               
                                <p>
                                    <a href='#!' className='text-reset f_about'>
                                    About
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset f_careers'>
                                    Careers
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset f_contact'>
                                        Contact
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset f_help'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p className='Footer_Address'>
                                    <MDBIcon icon="home" className="me-2" />
                                    1003, 10th floor, Earth Arise, Near Rockstar club, SP Ring Road, Ahmedabad-380013
                                </p>
                                <p className='Footer_Email'>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@uvtechnosoft.com
                                </p>
                                <p className='Footer_tollFree'>
                                    <MDBIcon icon="phone" className="me-3" /> 1800 233 2030
                                </p>
                                <p className='Footer_Mob'>
                                    <MDBIcon icon="print" className="me-3" /> 9428137843
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    UV Technosoft 
                    </a>
                </div>
            </MDBFooter>
        </React.Fragment>
    )
}

export default Footer;

                           





                            





                           













