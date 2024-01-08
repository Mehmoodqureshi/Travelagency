import React from 'react';
import './TestimonialsSection.css';

const TestimonialCard = ({ name, content, imageSrc, animationDirection }) => {
  return (
    <div className={`flex-none w-full sm:w-[345px] lg:w-[324px] h-[396px] bg-white shadow mx-4 testimonial-card ${animationDirection}`}>
      <img className="w-[105px] h-[105px] rounded-full mx-auto mt-4" src={imageSrc} alt={name} />
      <div className="text-gray-900 text-base font-bold uppercase mt-4 text-center">
        {name}
      </div>
      <div className="border border-black w-full lg:w-[324px] h-[0px] mt-4 mx-auto"></div>
      <div className="text-center text-black text-[15px] font-medium mt-6">
        {content}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="w-full sm:w-[640px] lg:w-[960px] xl:w-[1500px] h-auto relative bg-white flex flex-col items-center testimonials-section p-2 sm:p-8 lg:p-12">
      <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 relative heading">
        What our users say about us
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 lg:gap-12">
        <TestimonialCard
          name="Tyron Lenister"
          content="A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. Customer testimonials can take multiple forms, but the goal is always the same: to showcase how great your brand is."
          imageSrc="https://tse4.mm.bing.net/th?id=OIP.oUuxmWZflpmBV9l5nWm_qwHaEz&pid=Api&P=0&h=220"
          animationDirection="roll-in-left"
        />
        <TestimonialCard
          name="John Snow"
          content="A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. Customer testimonials can take multiple forms, but the goal is always the same: to showcase how great your brand is."
          imageSrc="https://tse2.mm.bing.net/th?id=OIP.dtQ-o8MOfhwUSHvRKfMePAHaKs&pid=Api&P=0&h=220"
          animationDirection="roll-in-bottom"
        />
        <TestimonialCard
          name="Arya Stark"
          content="A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. Customer testimonials can take multiple forms, but the goal is always the same: to showcase how great your brand is."
          imageSrc="https://tse3.mm.bing.net/th?id=OIP.z_i5rPVyz22I7mk0gucZcQHaEK&pid=Api&P=0&h=220"
          animationDirection="roll-in-right"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
