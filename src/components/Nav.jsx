import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import React, { Component } from "react";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
        <MDBNavbar
          fixed="top"
          expand="md"
          color="indigo"
          className="d-flex"
          dark
          scrolling
          transparent
        >
          <MDBNavbarBrand>
            <strong className="white-text">Nicholas Papageorge</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="#profile">About Me</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#experience">Experience</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#projects">Projects</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default Navbar;
