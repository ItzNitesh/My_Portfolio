import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer-section">
        <div className="container">
          <div className="footer-logo">
            <h1>Nitesh</h1>
          </div>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/nitesh-gupta-825543229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            {/* <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a> */}
            <a
              href="https://github.com/ItzNitesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Nitesh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
