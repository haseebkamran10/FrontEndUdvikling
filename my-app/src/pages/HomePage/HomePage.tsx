// HomePage.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import image1 from '../../kookaburra-placeholder.png'; // Update the path to the correct one for your project
import image2 from '../../Ben-Stokes-Cover.jpg'; // Update the path to the correct one for your project

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default HomePage;
