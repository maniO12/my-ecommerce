import React from 'react';
import hero_img from'../Assets/hero_image.png';
const Hero = () => {
  return (
    <div>
    <section className="hero-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className="hero-title1">
        <span className="spa">Unlock<br/></span>
              <span className="bold-text">Your Style</span>
        </h1>
        <h2 className="hero-title2">  Explore the finest and latest trends in fashion. Shop our new arrivals to stay ahead in style.</h2>
        <a href="#" className=" button btn btn-primary btn-lg">
          Latest Collection
        </a>
      </div>
      <div className=" image col-md-5 text-right">
        <img src={hero_img} alt="Latest Collection" className="img-fluid hero-image" />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero

