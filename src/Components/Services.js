
import React from 'react';
import '../CSS/Services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shopify from '../Images/shopify.png'
import ux from '../Images/ux.png';
import woocommerce from '../Images/woocommerce.png';
import magento from '../Images/magento.png';
import BigCommerce from '../Images/BigCommerce.png'

const Services = () => {
  return (
    <React.Fragment>
      <br />
      <Container fluid='sm'>
      <Row>
        <Col>
    <center>  <h1 className='main_heading_services'>Our Ecommerce Website Design and Development Services</h1></center>
      </Col>
      </Row>
      </Container>
      <br />

      <Container fluid='sm' className='main_services'>
        <Row className='UI d'> <br />
          <Col className='pu1'><br />
            <center><img src={ux} alt='error' /></center> <br />
            <h5 className='cc1'>Ecommerce Website UI/UX Design</h5>
        
            <p className='pp1'>We provide businesses with professional eCommerce websites UI/UX design for an easy way to sell their products and services online. We’re ready to help your company find the perfect ecommerce design solution that best suits you and your specific needs. The numbers above still haven’t stopped their increase. That wouldn’t be reasonable for any business to ignore such global trends having a great impact on profits and reaching customers. For the last couple of years here in Tubik we see the obvious and logical growth of interest from big and small businesses in establishing their presence online via websites and/or mobile applications.</p>
          </Col>


          <Col className='shopify d' > <br />
            <center><img src={shopify} alt='error' /></center> <br />
            <h5 className='cc2'>Shopify Development</h5>
            <p className='pp2'>UV Technosoft is a premier Shopify development company providing Shopify website design and development services for online stores. Our Shopify development team understands your specific business requirements and then builds a website that assists in capturing more traffic, more revenue, and provides a superlative online experience to your customers. We provide Shopify customization services that are tailor-made to sell your products like hot pancakes. Our Shopify experts can handle fresh ideas or renovation of existing portals in the market. The objective of our Shopify development services is to create an online store that is aesthetically set up and designed to meet your business needs.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='WooCommerce d'> <br />
          <center><img src={woocommerce} alt='error' /></center> <br />
            <h5 className='cc3'>WooCommerce Development</h5>
            <p className='pp3'>UV Technosoft is a proclaimed expert when it comes to WooCommerce website design and development services. We can help you to develop eCommerce stores from scratch using WooCommerce development and technology. These stores that we create are high on functionality and offer great user experience. Our WooCommerce developers have specialised themselves in the art of developing amazingly creative eCommerce stores using this breakthrough technology.</p>
          </Col>

          <Col className='Magento d'> 
            <i class="fa fa-magento"></i>
            <center><img src={magento} alt='error' /></center> <br />
            <h5 className='cc4'>Magento Development</h5>
            <p className='pp4'>One of the most preferred and user-friendly ecommerce platform, Magento is a name that has carved a niche for itself by offering superlative benefits for online merchants with high functionalities, more control over the look and a highly versatile and flexible shopping cart system. It is an open source technology that offers highly powerful marketing, SEO and catalogue-management tools. Each business has a different requirement and we understand it. At UV Technosoft, our expert Magento developers ensure that your online Magento store serves your custom business needs in the most meaningful manner.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='BigCommerce d'> <br />
          <center><img src={BigCommerce} alt='error' /></center> <br />
            <h5 className='cc5'>BigCommerce Development</h5>
            <p className='pp5'>BigCommerce is the most efficient e-commerce platform which helps in increasing omnichannel sales. Dealing with e-commerce in a highly competitive market is a complicated process. Here, BigCommerce web development saves you from putting extra effort and time to start the process. It is a self-hosted software that has vast customization capabilities. It is one store builder that saves resources and makes it easier to manage the online store.</p>
          </Col>
        </Row>
      </Container>
      <br />
    </React.Fragment>
  )
}

export default Services