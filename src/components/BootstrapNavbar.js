import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, NavbarBrand } from 'react-bootstrap'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

import logo from '../assets/img/Logotipo/negativo.png'

class BootstrapNavbar extends React.Component {
  render () {
    return (
      <Container id='containerBorder' className='col-lg-12'>
        <div className='row'>
          <div className='col-md-12'>
            <Router>
              <Navbar expand='lg' variant='dark' sticky='top'>
                {/* <Navbar.Brand href='#home'>React Bootstrap Navbar</Navbar.Brand> */}
                {/* <NavbarBrand> <a href='#'><img src={logo} weign='80' height='80' /></a> </NavbarBrand> */}
                <Navbar.Brand href='#home'>
                  <img
                    alt=''
                    src={logo}
                    width='80'
                    height='60'
                    className='d-inline-block align-top'
                  />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='mr-auto'>
                    <Nav.Link href='/'>Início</Nav.Link>
                    <Nav.Link href='/about-us'>Quem Somos</Nav.Link>
                    {/* <Nav.Link href='/contact-us'>About Us</Nav.Link> */}
                    <NavDropdown title='Área do Aluno' id='basic-nav-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>Moodle</NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>Plurall</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Faça Parte' id='basic-nav-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>Seja Professor</NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>Seja Plantonista</NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>Seja Voluntário</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/about-us'>Contato</Nav.Link>
                    <NavbarBrand> <Button variant='outline-info' id='nos-apoie'> Nos Apoie </Button> </NavbarBrand>

                  </Nav>
                  {/* <Nav>
                    <Nav.Link href='#deets'>More deets</Nav.Link>
                    <Nav.Link eventKey={2} href='#memes'>
                      Dank memes
                    </Nav.Link>
                  </Nav> */}
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/about-us'>
                  <AboutUs />
                </Route>
                <Route path='/contact-us'>
                  <ContactUs />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </Container>
    )
  }
}

export default BootstrapNavbar
