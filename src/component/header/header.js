import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="clearfix">
      <div className="logo">
        <img src={require("../../assets/logo.png")} />
      </div>
    </header>
  );
}

export default Header;
