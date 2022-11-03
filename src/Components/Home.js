import React,{useEffect} from "react";
import shopify from '../Images/shopify.png'
import woocommerce from '../Images/woocommerce.png';
import magento from '../Images/magento.png';
import BigCommerce from '../Images/BigCommerce.png'
import { Col, Container, Row } from "react-bootstrap";
import '../CSS/Home.css'

function Home() {

    useEffect(()=>{
        document.getElementById('App_Main_Heading').style.display='inline';
        document.getElementById('App_Main_Navbar').style.display='block';
        document.getElementById('Main_Footer').style.display='block'
    })

    return (
        <React.Fragment>
            <br/>
            <div className='overflow'>
            <center>
            <h1 className="Home_page_heading">Your Ecommerce Website Design and Development Partner</h1>
            </center>
            <p style={{textAlign:"justify"}} className='Home_page_content'>UV Technosoft is a premier e-commerce website design and development services providing company. We've a rich industry experience in developing eCommerce websites. So, we know how to merge brand imaginations with our solid tech stack to manifest your dream store. Our eCommerce web developers run through your requirements, identify the competitive roadblocks, and define the scopes to outline the eCommerce website development plan.</p>

           <center> <h2 className="home_page_heading_2"> <span className="Home_Line1">Our Ecommerce Tech Stack</span></h2></center>
           {/* <p ><span className="">dsds</span></p> */}
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
                <img src={BigCommerce} alt='error' fluid='md' className='Home_BigCommerce_Image' /> <br/><br/>
                <h5 className="homepage_bigCommerce">BigCommerce</h5>
                </center>
                </Col>
                </Row>
            </Container>
            </div>
            <br/>

        </React.Fragment>
    );
}

export default Home;
