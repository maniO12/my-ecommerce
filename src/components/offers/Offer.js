import React from 'react';
import exclusive_img from'../Assets/exclusive_image.png';
const Hero = () => {
  return (
    <div>
    <section className="offer hero-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className="offer-title1">
        <span className="spa">Exclusive<br/></span>
              <span className="text bold-text">Offers for you.</span>
        </h1>
        <h2 className="offer-title2">  Only on Best selling products.</h2>
        <a href="#" className=" button1 btn btn-primary btn-lg">
         CHECK OUT
        </a>
      </div>
      <div className=" image1 col-md-5 text-right">
        <img src={exclusive_img} alt="Latest Collection" className="img-fluid hero-image" />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
