import "./Header.css";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
            <p>Docs<span>Tank</span>.</p>
        </div>
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>ervices</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
