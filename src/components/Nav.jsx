import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBSmoothScroll
} from "mdbreact";
import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBNavbar
        color="indigo"
        dark
        expand="md"
        fixed="top"
        scrolling
        transparent
      >
        <MDBNavbarBrand>
          <strong className="white-text">Nicholas Papageorge</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse1")} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
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
    );
  }
}

export default Navbar;
