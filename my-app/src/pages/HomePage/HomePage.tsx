// HomePage.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import image1 from '../../kookaburra-placeholder.png'; // Make sure the path is correct
import image2 from '../../Ben-Stokes-Cover.jpg'; // Make sure the path is correct
import image3 from '../../Bat-Cover.jpg'; // Make sure the path is correct
import image4 from '../../Cover-2024.png'; // Make sure the path is correct
import image5 from '../../Player-cover.png'; // Make sure the path is correct

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <div className="slideshow-container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" />
          </div>
          <div>
            <img src={image4} alt="Slide 4" />
          </div>
          <div>
            <img src={image5} alt="Slide 5" />
          </div>
        </Slider>
      </div>
      <div className="recommendation-section">
        <h1 className="recommendation-title">ANBEFALING TIL DIG</h1>
      </div>
    </>
  );
};

export default HomePage;
