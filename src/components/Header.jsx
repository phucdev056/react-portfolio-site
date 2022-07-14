import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container main-header-container">
        <p>Michael Jahans</p>
        <div className="right-side">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
