import React from "react";
import { Element } from "react-scroll";

function Services() {
  const imageInfo = [
    {
      src: "https://tse4.mm.bing.net/th?id=OIP.O-bYisEEDd2wn5q-yEq4TgHaLI&pid=Api&P=0&h=220",
      name: "Tom Cruise",
      text: "Founder & Chairman",
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP._xkzJn3yPGvZ83PyQnw0gwHaLH&pid=Api&P=0&h=220",
      name: "Emma Wattson",
      text: "Managing Director",
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP.zczmeTXmnDj-fSkazzWHYwHaKA&pid=Api&P=0&h=220",
      name: "Mathew Perry",
      text: "Product Manager",
    },
  ];

  return (
    <Element name="services">
      <div className="flex flex-wrap justify-center md:justify-between lg:justify-around xl:justify-between ml-12">
        {imageInfo.map((info, index) => (
          <ImageWithInfo key={index} {...info} />
        ))}
      </div>
    </Element>
  );
}

function ImageWithInfo({ src, name, text }) {
  return (
    <div className="w-88  h-92 md:w-72 md:h-80 lg:w-96 lg:h-104 xl:w-80 xl:h-96 m-4 md:m-8 lg:m-8 xl:m-8 hover:scale-105 hover:shadow-md transition-transform">
      <img className="w-full  h-60 md:h-72 lg:h-80 xl:h-96 object-cover rounded" src={src} alt={name} />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default Services;
  