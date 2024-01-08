import React from "react";
import { Element } from "react-scroll";

function Trucks() {
  const imageInfo = [
    {
      src: "https://tse3.mm.bing.net/th?id=OIP.yyhdSxJBmwQy7w3REebFfwHaEo&pid=Api&P=0&h=220",
      name: "Truck Name",
      text: "How It Works",
    },
    {
      src: "https://tse4.mm.bing.net/th?id=OIP.K1kI82tIWx-6mq6Y_q1QbQHaEz&pid=Api&P=0&h=220",
      name: "Truck Name",
      text: "How It Works",
    },
    {
      src: "https://tse3.mm.bing.net/th?id=OIP.cGXOhSAE38iw8I_zkeAQKwHaEK&pid=Api&P=0&h=220",
      name: "Truck Name",
      text: "How It Works",
    },
  ];

  return (
    <Element name="Trucks">
      <div className="flex justify-center flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap mr-8">
        {imageInfo.map((info, index) => (
          <ImageWithInfo key={index} {...info} />
        ))}
      </div>
    </Element>
  );
}

function ImageWithInfo({ src, name, text }) {
  return (
    <div className="mb-4 m-4 md:m-8 lg:m-8 xl:m-8 relative text-center group">
      <div className="rounded-full overflow-hidden inline-block relative transition-transform transform  group-hover:opacity-80">
        <img
          src={src}
          className="h-60 w-62 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100  transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-lg font-semibold">{text}</p>
          <button className="px-4 py-2 text-sm  text-white bg-yellow-600">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trucks;
