import React from "react";
import "./header.css";
import "../../index.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello i'm</h5>
        <h1>Nicolaus Widi</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
