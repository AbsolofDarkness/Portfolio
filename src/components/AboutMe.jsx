import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
// import "./AboutMe.css";
import myImage from "../assets/images/NicholasPapageorge.jpg";
import Quotes from "../data/AboutMeQuotes";

class AboutMe extends Component {
  componentDidMount() {
    const quotes = Quotes.quotes;
    const quoteBody = this.refs.quoteText;
    const quoteAuthor = this.refs.quoteAuthor;

    let randNum = Math.floor(Math.random() * quotes.length);

    quoteBody.textContent = quotes[randNum].quote;
    quoteAuthor.textContent = quotes[randNum].author;
  }
  render() {
    return (
      <MDBRow>
        <MDBCol md="4">
          <img src={myImage} className="img-fluid my-image" alt="" />
        </MDBCol>
        <MDBCol md="8">
          <h2 className="text-center">Nicholas Papageorge</h2>
          <hr />
          <br />
          <blockquote className="blockquote">
            <p className="mb-0 text-center" ref="quoteText" />
            <footer
              className="blockquote-footer mb-3 text-center"
              ref="quoteAuthor"
            />
          </blockquote>
          <br />
          <p className="text-center">
            Just some nerd on the internet, who looks into the cosmos, wonders
            about the future, makes video games, and codes stuff. I do frontend
            and backend work for websites, and other web apps. I an currently
            working on a sci-fi FPS game in Unity, doing most thingy myself,
            with occasional outsourcing for models and sounds.
          </p>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default AboutMe;
