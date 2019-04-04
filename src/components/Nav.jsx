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
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <div>
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
            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
            <MDBCollapse
              id="navbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="#profile">About Me</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#experiences">Experience</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#projects">Projects</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default Navbar;
