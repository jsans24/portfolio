import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><HashLink to="#">Home</HashLink></li>
          <li><HashLink to="/#projects">Projects</HashLink></li>
          <li><HashLink to="/#contact">Contact</HashLink></li>
        </ul>
        </nav>
    )
  }

export default Navbar;