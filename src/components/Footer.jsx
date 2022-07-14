import React from "react";
import twitterIcon from "../assets/images/twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="left-side">
          <p>Copyright © 2022 Michael Jahans</p>
        </div>
        <div className="right-side">
          <a href="#">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
