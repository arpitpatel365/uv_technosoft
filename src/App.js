
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import { TeckStack } from './Components/TeckStack';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Error from './Components/Error.js'

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
            <center><h1 id='App_Main_Heading' className='first_heading'>UV  <span className='Home_technosoft'>Technosoft </span> </h1> </center>

            <Router>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='main_navbar' id='App_Main_Navbar'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='Toggle_Button' />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto nav-style2">
                    <Link to='/Home' className='Home_Nav'>  <Nav.Link href="#home" className='nav_link1' >Home</Nav.Link></Link>
                    <Link to='/Services' className='Services_Nav'> <Nav.Link href="#services" className='nav_link1'>Services</Nav.Link></Link>
                    <Link to='/TeckStack' className='TeckStack_Nav'>  <Nav.Link href="#techStack" className='nav_link1'>Tech Stack</Nav.Link></Link>
                    <Link to='Portfolio' className='Portfolio_Nav'> <Nav.Link href="#portfolio" className='nav_link1'>Portfolio</Nav.Link></Link>
                    <Link to='/About' className='About_Nav'>  <Nav.Link href="#about" className='nav_link1'>About</Nav.Link></Link>
                    <Link to='/Careers' className='Careers_Nav'><Nav.Link href="#careers" className='nav_link1'>Careers</Nav.Link></Link>
                    <Link to='/Contact' className='Contact_Nav'>  <Nav.Link href="#contact" className='nav_link1'>Contact</Nav.Link></Link>
                    <Link to='/Form' className='Form_Nav'>  <Nav.Link href="#form"></Nav.Link></Link>
                    <Link to='/Error'></Link>
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
                <Route path='*' element={<Error/>} />
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


















