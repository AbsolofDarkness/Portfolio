import { MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBSmoothScroll } from "mdbreact";
import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling transparent>
          <MDBNavbarBrand>
            <strong className="white-text">Nicholas Papageorge</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBSmoothScroll to="profile">About Me</MDBSmoothScroll>
              </MDBNavItem>
              <MDBNavItem>
                <MDBSmoothScroll to="experiences">Experience</MDBSmoothScroll>
              </MDBNavItem>
              <MDBNavItem>
                <MDBSmoothScroll to="projects">Projects</MDBSmoothScroll>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {this.state.collapsed}
      </div>
    );
  }
}

export default Navbar;
