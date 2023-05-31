import React from "react";
import AboutImg from "../assets/about-img.png";
import HeroImg from "../assets/hero-img.png";

function About() {
  return (
    <div>
      <div className="container-fluid about-container">
        <div className="row">
          <div className="col-12 order-first order-md-last col-md-6 about-img text-center mt-5">
            <img
              src={AboutImg}
              alt="cheers drink graphic"
              className="text-center"
            />
          </div>
          <div className="col-12 col-md-6 p-5">
            <div className="row about-row mb-4">
            <span className="about-title">About Us</span>
            </div>
            <p className="about-text">Shakn is an online platform dedicated to empowering
            mixology enthusiasts worldwide with an extensive collection of
            cocktail recipes. We aim to make home bartending an enjoyable and
            straightforward experience for both beginners and seasoned
            aficionados alike.</p> 
            
            <p className="about-text">Our platform is a celebration of the art of
            mixology, blending tradition with innovation to bring you a
            comprehensive catalogue of cocktail recipes. From classic
            concoctions such as the Old Fashioned and Margarita, to contemporary
            creations crafted by our team of mixologists, we present an
            inclusive range of flavors to satisfy every palate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
