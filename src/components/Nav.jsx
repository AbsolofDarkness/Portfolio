import { MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBSmoothScroll } from "mdbreact";
import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />;
    return (
      <div>
        <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling transparent>
          <MDBNavbarBrand>
            <strong className="white-text">Nicholas Papageorge</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <MDBCollapse isOpen={this.state.collapsed} navbar>
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
        {this.state.collapsed && overlay}
      </div>
    );
  }
}

export default Navbar;
