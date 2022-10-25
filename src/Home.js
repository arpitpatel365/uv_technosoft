import React from "react";
import shopify from './shopify.png'
import woocommerce from './woocommerce.png';
import magento from './magento.png';
import BigCommerce from './BigCommerce.png'
import { Col, Container, Row } from "react-bootstrap";
import './Home.css'

function Home() {

    return (
        <React.Fragment>
            <br/>
            <center>
            <h1 className="Home_page_heading">Your Ecommerce Website Design and Development Partner</h1>
            </center>
            <p style={{textAlign:"justify"}} className='Home_page_content'>UV Technosoft is a premier e-commerce website design and development services providing company. We've a rich industry experience in developing eCommerce websites. So, we know how to merge brand imaginations with our solid tech stack to manifest your dream store. Our eCommerce web developers run through your requirements, identify the competitive roadblocks, and define the scopes to outline the eCommerce website development plan.</p>

           <center> <h2 className="home_page_heading_2">Our Ecommerce Tech Stack</h2></center>
            <br/> <br/>
            <Container fluid='sm'>    
                <Row className="justify-content-md-center df1">
                    <Col>
                    <center>
                <img src={shopify} alt="error"/> <br/><br/>
                <h5 className="homepage_shopify">Shopify</h5>
                </center>
                </Col>

                <Col>
                <center>
                <img src={woocommerce} alt='error'/> <br/><br/>
                <h5 className="homepage_WooCommerce">WooCommerce</h5>
                </center>
                </Col>
                </Row>

                <br/>

                <Row className="df1">
                    <Col>
                    <center>
                <img src={magento} alt='error'/> <br/><br/>
                <h5 className="homepage_magento">Magento</h5>
                </center>
                </Col>
                <Col>
                <center>
                <img src={BigCommerce} alt='error' fluid='md'/> <br/><br/>
                <h5 className="homepage_bigCommerce">BigCommerce</h5>
                </center>
                </Col>
                </Row>
            </Container>
            <br/>
        </React.Fragment>
    );
}

export default Home;
