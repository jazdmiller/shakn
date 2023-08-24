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
          <div class="mobile-toggler ">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <i class="fa-solid fa-bars fa-2x bars-icon"></i>
            </a>
          </div>

        
          <div
            class="modal fade"
            id="navbModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-fullscreen modal-dialog-slideout" role="document">
              <div class="modal-content modal-content-nav px-md-5 px-3">
                <div class="modal-header modal-header-nav d-flex">
                  <h5 class="modal-title modal-title-nav" id="exampleModalLabel">Shakn</h5>
                  <button
                    type="button"
                    class=" btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body modal-body-nav text-center p-5">
                  <div class="modal-line mt-5">
                    <a href="/">Home</a>
                  </div>

                  <div class="modal-line">
                    <a href="/">Browse All</a>
                  </div>

                  <div class="modal-line">
                    <a href="/">About</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
