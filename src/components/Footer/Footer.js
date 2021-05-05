import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer--container">
      <div className="icons--row">
        <SocialIcon className="icon" url="https://www.linkedin.com/in/kshivam99/" />
        <SocialIcon className="icon" url="https://github.com/kshivam99" bgColor="#fff" />
        <SocialIcon className="icon" url="https://twitter.com/kshivam99_" />
      </div>
      <p>Design inspired from <a href="https://frontendmasters.com/">Frontend Masters</a></p>
    </div>
  );
}

export default Footer;
