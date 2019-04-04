import { MDBBtn, MDBCard, MDBCardTitle, MDBCol, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import Project1Image from "../assets/images/project1Image.jpg";

const Projects = () => {
  return (
    <MDBRow>
      <MDBCol lg="3" md="6" className="pb-3">
        <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project1Image})` }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 className="light-blue-text">
                <MDBIcon fab icon="html5" />
                <MDBIcon fab icon="css3" /> Project 1
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>First HTML Project</strong>
              </MDBCardTitle>
              <p>
                This project was to test being able to code a website using provided images. As this was the first project of the class, it is very
                basic, and doesn't have a many features as future projects.
              </p>
              <MDBBtn color="light-blue" href="https://absolofdarkness.github.io/First_HTML/" target="_blank">
                <MDBIcon icon="clone left" /> View Project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Projects;
