import Slider from 'react-slick';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Promotion Images
const promotionImages = [
  'https://tse3.mm.bing.net/th?id=OIP.QHj6zUfwbyIDQVXwlxvrhwHaE8&pid=Api&P=0&h=220',
  'https://tse3.mm.bing.net/th?id=OIP.lTAviQMGwrdTDAxKRY7fPAHaES&pid=Api&P=0&h=220',
  'https://tse1.mm.bing.net/th?id=OIP.zN0I0P_p8Xv9sjsqbOOZrQHaD8&pid=Api&P=0&h=220',
];

// Carousel Component
const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mainImages = [
    'https://tse3.mm.bing.net/th?id=OIP.8t46ZiWWxjO1qgQSO4KdmAHaEo&pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th?id=OIP.6Cr8DawdniZSXHuMNkhjhQHaEo&pid=Api&P=0&h=220',
    'https://tse4.mm.bing.net/th?id=OIP.3qw9bEEFG2sTouJj9hoGBwHaEo&pid=Api&P=0&h=220',
    'https://tse3.mm.bing.net/th?id=OIP.8t46ZiWWxjO1qgQSO4KdmAHaEo&pid=Api&P=0&h=220',
    'https://tse2.mm.bing.net/th?id=OIP.YqQOdZmGiZDLicjlKsj-yQHaEo&pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th?id=OIP.6Cr8DawdniZSXHuMNkhjhQHaEo&pid=Api&P=0&h=220',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="w-full h-full">
        {mainImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <div className="absolute bottom-0 left-0 right-0 p-2 items-center justify-center bg-opacity-75">
                {/* Promotion Images */}
                <div className="flex space-x-4">
                  {promotionImages.map((promoImage, promoIndex) => (
                    <img
                      key={promoIndex}
                      src={promoImage}
                      alt={`Promotion ${promoIndex + 1}`}
                      className="w-60 h-60 rounded-full bg-gray-200 p-2 shadow-2xl"
                    />
                  ))}
                </div>
              </div>
            )}
            <img src={image} alt={`Images ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
