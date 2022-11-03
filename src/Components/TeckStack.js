import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import shopify from '../Images/shopify.png'
import woocommerce from '../Images/woocommerce.png'
import magento from '../Images/magento.png';
import BigCommerce from '../Images/BigCommerce.png';
import '../CSS/TeckStack.css'

export const TeckStack = () => {
  return (
    <React.Fragment>
        <br/>
        <center>
        <h1 className='techStack_content'>Our Ecommerce Website Design and Development Tech Stack</h1> </center>  <br/>
        <Container>
        <Row>
        <Col>
          <center>
          <img src={shopify} alt='error'/> 
          <br/>  <br/>
          <h5 className='teckStack_shopify'>Shopify</h5> <br/><br/><br/>
          <img src={woocommerce} alt='error' className='TeckStack_Woocommerce_Image' /> <br/>  <br/>
          <h5 className='teckStack_WooCommerce'>WooCommerce</h5>
          </center>
          </Col>

          <Col>
          <center>
          <img src={magento} alt='error' className='TeckStack_Magento_Image' /> <br/>  <br/>
          <h5 className='teckStack_magento'>Magento</h5> <br/><br/><br/><br/>
          <img src={BigCommerce} alt='error' className='TeckStack_BigCommerce_Image' /> <br/>  <br/>
          <h5 className='teckStack_BigCommerce'>BigCommerce</h5>
          </center>
          </Col>

        </Row>
        </Container>  
        <br/> 
        </React.Fragment>
  )
}
