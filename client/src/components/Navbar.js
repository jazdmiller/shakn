import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'


function Navbar() {

  //desktop animation

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.07, delayChildren: 0.02 * i }
    }),
    exit: (i = 1) => ({
      opacity: 0,
      height: 90,
      transition: {
        delayChildren: .2 * i
      }
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
      y: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      height: 90,
      transition: {
        ease: "easeInOut",
        delay: 0.4
      }
    }
  }
  

  //modal animation

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.9
      }
    }
  }



  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-none py-0 border-bottom border-dark border-2 nav-background">
        <motion.div variants={container} initial="hidden" animate="visible" exit="exit" class="container-fluid navb-container">
            <div className=" border-dark p-2 px-5 nav-logo">
          <Link to="/">
            <motion.div variants={child} exit="exit">Shakn</motion.div>
          </Link>
          </div>
          <div class="mobile-toggler ">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <i style={{color: "black"}}class="fa-solid fa-bars fa-2x bars-icon"></i>
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
              <div class="modal-content modal-content-nav px-md-5 px-3" variants={container} initial="hidden" animate="visible">
                <div class="modal-header modal-header-nav d-flex">
                  <h5 class="modal-title modal-title-nav" id="exampleModalLabel">Shakn</h5>
                  <button
                    type="button"
                    class=" btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <motion.div variants={container} initial="hidden" whileInView="visible" class="modal-body modal-body-nav text-center p-5">
                <AnimatePresence>
                  <motion.div variants={child} exit="exit" class="modal-line mt-5">
                    <a href="/">Home</a>
                  </motion.div>

                  <motion.div variants={child} class="modal-line">
                    <a href="/results/all">Browse All</a>
                  </motion.div>

                  <motion.div variants={child} class="modal-line">
                    <a href="/about">About</a>
                  </motion.div>
                </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
