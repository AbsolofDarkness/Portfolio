import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import View from "./components/View";

class App extends Component {
  render() {
    // TODO: Integrate ParticlesJS into final product
    // particlesJS.load("particles-js", "./globalAssets/particles.json", () => {
    //   console.log("Particles Config Loaded");
    // });
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
      </div>
    );
  }
}

export default App;
