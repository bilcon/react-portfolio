import React from "react";
import coverImage from "../../assets/Thanksgiving_2005_020.bmp";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Morris</h1>
      <img src={coverImage} alt="fishing pond background"></img>
      {props.children}
    </header>
  );
}

export default Header;
