import React from "react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TopNav() {
  const cartList = useSelector((state) => state.cartList);
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary shadow-sm   ">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            React Redux-Toolkit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 w-100  justify-content-between  "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/products">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="">
                Cart -{" "}
                <Badge bg="dark" pill>
                  {cartList.length}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
