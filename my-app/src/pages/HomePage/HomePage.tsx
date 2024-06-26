
import React ,{ useState, useEffect  }from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HomePage/HomePage.css';
import image1 from '../../images/kookaburra-placeholder.png';
import image2 from '../../images/Ben-Stokes-Cover.jpg';
import image3 from '../../images/SS-cover.png';
import image4 from '../../images/Bat-Cover.jpg';
import image5 from '../../images/Cover-2024.png';
import imageP_1 from '../../images/gm-bat.jpg'; 
import imageP_2 from '../../images/sg-bat.jpg'; 
import imageP_3 from '../../images/kookaburra-bat.jpg'; 
import imageP_4 from '../../images/GG-bat.png'; 
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Categories/Categories';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';


const products = [
  { image: imageP_1, price: "DKK 1.250", name: "GM Bat" },
  { image: imageP_2, price: "DKK 1.100", name: "SG Bat" },
  { image: imageP_3, price: "DKK 950", name: "Kookaburra Bat" },
  { image: imageP_4, price: "DKK 1.500", name: "GG Bat" }
];

const HomePage: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goToProductsPage = () => {
    navigate('/productspage'); 
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);
  
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
    {loading && <LoadingIndicator />}
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
            <button className="product-button" onClick={goToProductsPage}>Læs mere</button>
          </div>
        ))}
          <Categories/>
      <Footer/>
      </div>
    
    </>
  );
};

export default HomePage;