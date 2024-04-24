// HomePage.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import image1 from '../../kookaburra-placeholder.png';
import image2 from '../../Ben-Stokes-Cover.jpg';
import image3 from '../../SS-cover.png';
import image4 from '../../Bat-Cover.jpg';
import image5 from '../../Cover-2024.png';
import imageP_1 from '../../gm-bat.jpg'; 
import imageP_2 from '../../sg-bat.jpg'; 
import imageP_3 from '../../kookaburra-bat.jpg'; 
import imageP_4 from '../../GG-bat.png'; 

const products = [
  { image: imageP_1, price: "DKK 1.250", name: "GM Bat" },
  { image: imageP_2, price: "DKK 1.100", name: "SG Bat" },
  { image: imageP_3, price: "DKK 950", name: "Kookaburra Bat" },
  { image: imageP_4, price: "DKK 1.500", name: "GG Bat" }
];

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="slideshow-container">
        <Slider {...settings}>
          <div><img src={image1} alt="Slide 1" /></div>
          <div><img src={image2} alt="Slide 2" /></div>
          <div><img src={image3} alt="Slide 3" /></div>
          <div><img src={image4} alt="Slide 4" /></div>
          <div><img src={image5} alt="Slide 5" /></div>
        </Slider>
      </div>
      <div className="title-container">
        <div>Anbefaling til dig </div>
      </div> 
      <div className="additional-image-container">
        {products.map((product, index) => (
          <div key={index} className="product-container">
            <img src={product.image} alt="Additional Product" />
            <p className="product-price">{product.price}</p>
            <button className="product-button">Læs mere</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;