import React,{Fragment} from "react";
import { NavbarBrand,Container, Nav, Navbar, NavLink } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
// import Home from "../Navigation/Home";
// import Store from "../Navigation/Store";
// import About from "../Navigation/About";
// import BtnCart from "../Navigation/BtnCart";


const Header = (props) =>{
    return (
      <Fragment>
        <Navbar bg="dark" expand="md" variant="dark">
          <Container>
            <NavbarBrand href="/">E-Commerce</NavbarBrand>
            <Nav className="me-auto" bg="dark" variant="dark" ml ="3" >
              <Nav.Link href="/Home"> Home</Nav.Link>

              <NavLink href="/Store">Store</NavLink>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <HeaderCartButton onClick={props.onShowCart}/>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
}

export default Header ;