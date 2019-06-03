import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import React, { Component } from "react";
import Particles from "react-particles-js";
import "./View.css";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <MDBView>
        <Particles
          params={{
            particles: {
              number: {
                value: this.state.width * 0.1
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        <MDBMask className="rgba-indigo-light flex-center">
          <MDBContainer className="text-center white-text">
            <h1 className="higherZIndex">
              A Coder Wondering the Vastness of Space!
            </h1>
            <br />
            <h5 className="higherZIndex">
              Welcome to my portfolio! Here you will see my experiences, and
              projects I've done during my bootcamp.
            </h5>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    );
  }
}

export default View;
