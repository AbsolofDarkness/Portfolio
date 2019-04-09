import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import BackEnd from "../assets/images/database.jpeg";
import FrontEnd from "../assets/images/frontend.jpeg";
import Other from "../assets/images/game.jpeg";

const Experiences = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard wide className="mb-4">
          <MDBCardImage cascade overlay="blue-light" className="img-fluid" src={FrontEnd} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
              <MDBIcon icon="desktop" /> Frontend
            </MDBCardTitle>
            <MDBCardText>
              <MDBIcon icon="check" /> HTML/CSS
              <br />
              <MDBIcon icon="check" /> Javascript
              <br />
              <MDBIcon icon="check" /> jQuery
              <br />
              <MDBIcon icon="check" /> AJAX
              <br />
              <MDBIcon icon="check" /> Bootstrap
              <br />
              <MDBIcon icon="check" /> Handlebars
              <br />
              <MDBIcon icon="check" /> React.js
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard wide className="mb-4">
          <MDBCardImage cascade overlay="cyan-light" className="img-fluid" src={BackEnd} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
              <MDBIcon icon="database" /> Backend
            </MDBCardTitle>
            <MDBCardText>
              <MDBIcon icon="check" /> C#
              <br />
              <MDBIcon icon="check" /> MySQL
              <br />
              <MDBIcon icon="check" /> Express.js
              <br />
              <MDBIcon icon="check" /> ORMs (IE Sequelize)
              <br />
              <MDBIcon icon="check" /> MongoDB
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard wide className="mb-4">
          <MDBCardImage cascade overlay="red-light" className="img-fluid" src={Other} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
              <MDBIcon icon="dice" /> Other
            </MDBCardTitle>
            <MDBCardText>
              <MDBIcon icon="check" /> Using Command Line/Terminal
              <br />
              <MDBIcon icon="check" /> Continuous Integration and Deployment
              <br />
              <MDBIcon icon="check" /> Using Node Package Manager
              <br />
              <MDBIcon icon="check" /> Unity Game Development
              <br />
              <MDBIcon icon="check" /> Gamer
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Experiences;
