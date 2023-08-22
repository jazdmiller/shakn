import React from "react";
import AboutImg from "../assets/about-img.png";
import HeroImg from "../assets/hero-img.png";
import {motion} from 'framer-motion'

function About() {

  const container = {
    hidden: {opacity: 0},
    visible: (i =1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.02 * i
      }
    })
  }

  const child = {
    hidden: {
      opacity: 0,
      y: -30,
      transition: {
        type: "fadeIn"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "fadeIn"
      }
    }
  }
  return (
    <div>
      <div className="container-fluid about-container">
        <div className="row pt-5 px-5">
          <motion.div variants={container} initial="hidden" animate="visible"className="col-12 p-2 px-md-5 mt-3">
            <motion.div variants={child} className="row about-row mb-4">
            <span className="about-title">About Us</span>
            </motion.div>
            <motion.p variants={child} className="about-text mx-auto mt-5">Shakn is an online platform dedicated to empowering
            mixology enthusiasts worldwide with an extensive collection of
            cocktail recipes. We aim to make home bartending an enjoyable and
            straightforward experience for both beginners and seasoned
            aficionados alike.</motion.p> 
            
            <motion.p variants={child} className="about-text mx-auto mt-4">Our platform is a celebration of the art of
            mixology, blending tradition with innovation to bring you a
            comprehensive catalogue of cocktail recipes. From classic
            concoctions such as the Old Fashioned and Margarita, to contemporary
            creations crafted by our team of mixologists, we present an
            inclusive range of flavors to satisfy every palate.</motion.p>
          <motion.div variants={child} className="col-12 about-img text-center mt-0">
            <img
              src={AboutImg}
              alt="cheers drink graphic"
              className="text-center"
            />
          </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
