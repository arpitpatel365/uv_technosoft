
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/About.css';
import '../CSS/Responsive.css';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <React.Fragment>
            <br />
            <h1 className='About_h1'>About UV Technosoft</h1>
            <p className='About_p1'>At UV Technosoft, we are a team of strategists, designers, technologists, and creators, laser focused on your ecommerce brand’s growth. UV Technosoft is a team of specialists in eCommerce, design, customer experience, web development and growth optimization. We live at the intersection of technology, creativity and commerce. We are your partner and we align with your business goals to provide real, measurable results by building, deploying and optimising eCommerce experiences.</p>

         

            <div className="responsive-container-block outer-container">
                <div className="responsive-container-block inner-container">
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                        <p className="text-blk heading-text">Meet our team
                        </p>
                        <p className="text-blk sub-heading-text">We are the team of passionate and talented engineers desired to give you tailor-made solutions, that you need in your business.
                        </p>
                    </div>
                    <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                            <div className="card">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg" alt='error' className="card-img"  />
                                <p className="text-blk name">Gustavo Workman
                                </p>
                                <p className="text-blk position">CEO
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                            <div className="card">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg" className="card-img" alt='error'  />
                                <p className="text-blk name">Peter Charm
                                </p>
                                <p className="text-blk position">Full Stack Developer
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                            <div className="card">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg" className="card-img" alt='error'  />
                                <p className="text-blk name">Ronad Christian
                                </p>
                                <p className="text-blk position">DevOps Engineer
                                </p>
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                            <div className="card">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg" className="card-img" alt='error'  />
                                <p className="text-blk name">Albert Leone
                                </p>
                                <p className="text-blk position">Marketing Manager
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <h5 className='About_h5'>Our Core Values</h5>
            <p className='About_coreValue'>We ensure that our team members and partners possess these traits. We feel that it is important to prioritise these core values over everything else. This allows us to deliver results for our clients, as well as a safe and fun work environment. Our core values include Teamwork, Passion, Respect, Talent, Accountability, Resourcefulness, Radical Transparency, and Visionary.</p>

            <h5 className='About_h5_2'>Join Our Team</h5>
            <p className='About_Team'>We are always looking for top talent to join our team. If you're interested in taking on challenging projects with global brands, reach out to us.</p>

            
            <Link to='/Careers' className='About_Link'><Button variant="success">View Career Opportunities</Button>{' '}</Link> <br/><br/>
        </React.Fragment>
    )
}

export default About