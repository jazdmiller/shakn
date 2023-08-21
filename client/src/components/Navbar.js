import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'


function Navbar() {

  const [navBarOpen, setNavBarOpen] = useState(false)

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.02, delayChildren: navBarOpen ? 0.02 * i : 0.02 * i}
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }
  
  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen)
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-none py-0 border-bottom border-dark border-2 nav-background">
        <motion.div variants={container} initial="hidden" animate="visible" class="container-fluid navb-container">
            <div className=" border-dark p-2 px-5 nav-logo">
          <Link to="/">
            <motion.div variants={child}>Shakn</motion.div>
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
            onClick={toggleNavBar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
          <motion.div variants={container} initial="hidden" animate="visible" class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul  class="navbar-nav">
            <motion.li variants={child} class="nav-item px-4 nav-item-text">
                <Link to="/results/all"class="nav-link">
                  Browse All
                </Link>
              </motion.li>
              <motion.li variants={child} class="nav-item px-4 nav-item-text">
                <Link to="/blog"class="nav-link">
                  Blog
                </Link>
              </motion.li>
              <motion.li variants={child} class="nav-item px-4 nav-item-text">
                <Link to="/about" class="nav-link" >
                  About
                </Link>
              </motion.li>
              </ul>
          </motion.div>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
