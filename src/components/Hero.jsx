import React from "react";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoes from "../assets/shoes.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-section">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="amazon-logo" />
            <img src={flipkart} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoes} alt="shoes-image" />
      </div>
    </div>
  );
};

export default Hero;
