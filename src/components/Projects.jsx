import { MDBBtn, MDBCard, MDBCardTitle, MDBCol, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import GroupProject2Image from "../assets/images/groupProject2Image.jpg";
import Project10Image from "../assets/images/project10Image.jpg";
import Project1Image from "../assets/images/project1Image.jpg";
import Project3Image from "../assets/images/project3Image.jpg";
import Project4Image from "../assets/images/project4Image.jpg";
import Project6Image from "../assets/images/project6Image.jpg";
import Project7Image from "../assets/images/project7Image.jpg";
import Project8Image from "../assets/images/project8ImageStock.jpg";
import Project9Image from "../assets/images/project9Image.jpg";

const Projects = () => {
  return (
    <div>
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
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project3Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="purple-text">
                  <MDBIcon fab icon="js-square" /> Project 2
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Guessing Game Project</strong>
                </MDBCardTitle>
                <p>
                  This project was started after introducing Javascript. The objective was to make a guessing game, like hangman. The word is randomly
                  chosen from an array, and input is captured with key presses.
                </p>
                <MDBBtn color="purple" href="https://absolofdarkness.github.io/Word_Guess_Game/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project4Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="yellow-text">
                  <MDBIcon fab icon="js-square" /> Project 3
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>jQuery Gem Clicker</strong>
                </MDBCardTitle>
                <p>
                  A rather unfair game that makes no sense in the long run. This project incorperates jQuery for grabbing click events and modifying
                  text on the page.
                </p>
                <MDBBtn color="yellow" href="https://absolofdarkness.github.io/unit-4-game/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project6Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="light-green-text">
                  <MDBIcon fab icon="js-square" /> Project 4
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Giphy API Project</strong>
                </MDBCardTitle>
                <p>My first dabble into APIS and AJAX, this project displays GIFs using the GIPHY API with AJAX calls.</p>
                <MDBBtn color="light-green" href="https://absolofdarkness.github.io/GiphyAPIAssignment/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project7Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="red-text">
                  <MDBIcon icon="database" /> Project 5
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Train Timetable</strong>
                </MDBCardTitle>
                <p>
                  Using Firebase for a remote database, and moment for time calculations, this site can be accessed anywhere, and will show the same
                  anywhere.
                </p>
                <MDBBtn color="red" disabled href="#" target="_blank">
                  <MDBIcon icon="wrench left" /> Being Updated
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" mb="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project8Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="indigo-text">
                  <MDBIcon icon="project-diagram" /> Project 6
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Friend Finder</strong>
                </MDBCardTitle>
                <p>The first time using Heroku to push a site, and using Express for API routing. A lot of new stuff in this assignment.</p>
                <MDBBtn color="indigo" href="https://friendfinder-3q3213123.herokuapp.com/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" md="12" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${GroupProject2Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="green-text">
                  <MDBIcon icon="file-invoice-dollar" /> Group Project 2
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>TOYoda</strong>
                </MDBCardTitle>
                <p>
                  The first presentable group project I did, this one uses everything we learned to make a used toy selling site, much like "Offer
                  Up". I did work with the front-end for this, and helping around with some back-end development. New things used were Handlebars, and
                  using a Google login.
                </p>
                <MDBBtn color="green" href="https://purplevortexproject.herokuapp.com/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project9Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="sticky-note" /> Project 7
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Mongo Web Scraper</strong>
                </MDBCardTitle>
                <p>
                  Using MongoDB and Cherio, this is just a web scraper. Nothing fancy going on, but it was my first time using MongoDB as a remote
                  databse. While it's not my best work, it shows that I can put together a web app using MongoDB.
                </p>
                <MDBBtn color="orange" href="https://mongoscraper-e24e3ee.herokuapp.com/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="pb-3">
          <MDBCard className="card-image z-depth-4" style={{ backgroundImage: `url(${Project10Image})` }}>
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="amber-text">
                  <MDBIcon icon="project-diagram" /> Project 8
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>React Memory Game</strong>
                </MDBCardTitle>
                <p>
                  This is the first time I used React. While not very content heavy, it is using a brand new technology to me, and will get better as
                  I continue to use React, and become more aquainted with it.
                </p>
                <MDBBtn color="amber" href="https://reactmemorygame-e2eqe2e.herokuapp.com/" target="_blank">
                  <MDBIcon icon="clone left" /> View Project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Projects;
