
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import { TeckStack } from './TeckStack';
import Portfolio from './Portfolio';
import About from './About';
import Careers from './Careers';
import Contact from './Contact';
import Footer from './Footer';
import Form from './Form';
// import Rough from './Rough';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>


function App() {
 

  return (
    <React.Fragment >
      <Container fluid>
        <Row>
          <Col>
            <center><h1 className='first_heading'>UV  <span className='Home_technosoft'>Technosoft </span> </h1> </center>

            <Router>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='main_navbar'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Link to='/Home' className='Home_Nav'>  <Nav.Link href="#home" className='App_Home' >Home</Nav.Link></Link>
                    <Link to='/Services' className='Services_Nav'> <Nav.Link href="#services">Services</Nav.Link></Link>
                    <Link to='/TeckStack' className='TeckStack_Nav'>  <Nav.Link href="#techStack">Tech Stack</Nav.Link></Link>
                    <Link to='Portfolio' className='Portfolio_Nav'> <Nav.Link href="#portfolio">Portfolio</Nav.Link></Link>
                    <Link to='/About' className='About_Nav'>  <Nav.Link href="#about">About</Nav.Link></Link>
                    <Link to='/Careers' className='Careers_Nav'><Nav.Link href="#careers">Careers</Nav.Link></Link>
                    <Link to='/Contact' className='Contact_Nav'>  <Nav.Link href="#contact">Contact</Nav.Link></Link>
                    <Link to='/Form' className='Form_Nav'>  <Nav.Link href="#form"></Nav.Link></Link>
                    {/* <Link to='/Rough'>  <Nav.Link href="#rough"></Nav.Link>Rough</Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/TeckStack' element={<TeckStack />} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/About' element={<About />} />
                <Route path='/Careers' element={<Careers />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Form' element={<Form />} />
                {/* <Route path='/Rough' element={<Rough />} /> */}
              </Routes>
            </Router>


            <Footer />


          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;


















