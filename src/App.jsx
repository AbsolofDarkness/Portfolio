import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
// import "./App.css";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import View from "./components/View";

class App extends Component {
  render() {
    return (
      <div>
        <header id="viewPage">
          <Navbar />
          <View />
        </header>
        <main className="py-5">
          <MDBContainer>
            <MDBRow id="profile">
              <MDBCol size="12">
                <h1 className="display-4 text-center">About Me</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12">
                <hr />
              </MDBCol>
            </MDBRow>
            {/* AboutMe contains MDBRow */}
            <AboutMe />
            <MDBRow id="experiences">
              <MDBCol size="12">
                <h1 className="display-4 text-center">Experience</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12">
                <hr />
              </MDBCol>
            </MDBRow>
            {/* Experiences contains MDBRow */}
            <Experiences />
            <MDBRow id="timeline">
              <MDBCol size="12">
                <h1 className="display-4 text-center">Eduication Timeline</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12">
                <hr />
              </MDBCol>
            </MDBRow>
            {/* Timeline contains MDBRow */}
            <Timeline />
            <MDBRow id="projects">
              <MDBCol size="12">
                <h1 className="display-4 text-center">Projects</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12">
                <hr />
              </MDBCol>
            </MDBRow>
            {/* Projects contains MDBRow */}
            <Projects />
          </MDBContainer>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
