import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
    return (
      <nav>
        <a className="hamburger" href="/"><i className="fa fa-bars"></i></a>
        <ul>
          <li><HashLink to="/#about">About</HashLink></li>
          <li><HashLink to="/#gallery">Gallery</HashLink></li>
          <li><HashLink to="/blog#top">Blog</HashLink></li>
          <li><HashLink to="/#contact">Contact</HashLink></li>
        </ul>
        </nav>
    )
  }

export default Navbar;