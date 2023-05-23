import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './link.css';
import logo from "../assets/logo.png"

function NavBar() {
    const submitHandler = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); 
        if(query){
            navigate(`/search?query=${query}`)
        }
    }

  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const login = true;

  return (
    <Navbar bg="black" expand="lg" sticky='top' variant='dark'>
      <Container>
        <Navbar.Brand><Link to="/"><img alt="logo" src={logo} style={{height:"100px"}} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link><Link to="/" className='navlink'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/teams" className='navlink'>Sponsor</Link></Nav.Link>
        
            <Nav.Link><Link to="/home" className='navlink'>{login===true ? "Log Out" : "Log In"}</Link></Nav.Link>
            <NavDropdown title={<span className="navlink">Esplora</span>} id="navbarScrollingDropdown" className='navlink'>
                <NavDropdown.Item href="#action5">Calendario</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/team">Squadre</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/player">Giocatori</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={(event) => submitHandler(event)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button variant="success" onClick={(event) => submitHandler(event)}>Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;