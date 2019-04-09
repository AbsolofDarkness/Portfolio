import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import React from "react";
// import Particles from "react-particles-js";
import "./View.css";

const View = () => {
  return (
    <MDBView>
      <MDBMask className="rgba-indigo-light flex-center">
        <MDBContainer className="text-center white-text">
          <h1 className="higherZIndex">A Coder Wondering the Vastness of Space!</h1>
          <br />
          <h5 className="higherZIndex">Welcome to my portfolio! Here you will see my experiences, and projects I've done during my bootcamp.</h5>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
};

export default View;
