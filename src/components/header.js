import React from 'react';
import './header.css'

function Header() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="sec-1">
          <a link="#">Home</a>
        </div>
        <div className="sec-2">
          <a link="#">About Us</a>
          <a link="#">Blog</a>
          <a link="#">Team</a>
        </div>
      </nav>
      <div className="header">
      </div>
    </div>
  );
}

export default Header;
