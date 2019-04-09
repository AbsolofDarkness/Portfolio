import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdbreact";
import React from "react";

const Footer = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/AbsolofDarkness" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="tw-ic" href="https://twitter.com/StargazerBird" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="li-ic" href="https://www.linkedin.com/in/nicholas-papageorge-856621171/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="git-ic" href="https://github.com/AbsolofDarkness" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBIcon fab icon="react" /> Made with React - &copy; {new Date().getFullYear()} Copyright: Nicholas Papageorge
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
