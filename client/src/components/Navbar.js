import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-none py-0 border-bottom border-dark nav-background">
        <div class="container-fluid p-0">
            <div className=" border-dark p-2 px-5 nav-logo">
          <Link to="/">
            Shakn
          </Link>
          </div>
          <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item px-4 nav-item-text">
                <Link to="/blog"class="nav-link">
                  Blog
                </Link>
              </li>
              <li class="nav-item px-4 nav-item-text">
                <Link to="/about" class="nav-link" >
                  About
                </Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
