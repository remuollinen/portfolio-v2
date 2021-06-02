import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2021 Remu Ollinen</p>
      <div className="icons">
        <a
          href="https://github.com/remuollinen"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" id="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/remu-ollinen/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon" id="linkedin-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
