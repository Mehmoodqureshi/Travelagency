import React from "react";
import { Element } from "react-scroll";

const AboutUs = () => {
  return (
    <Element name="about">
      <div className="mx-4 md:mx-12 mt-4 text-justify md:px-6 lg:px-8 xl:px-12">
        <p className="text-base">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
          in laying out print, graphic or web designs. The passage is attributed
          to an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with:
          <strong>The Beginning of Lorem Ipsum</strong>
        </p>
        <p className="text-base">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          <strong>The Quote from Lorem Ipsum</strong>
        </p>
        <p className="text-base">
          The purpose of lorem ipsum is to create a natural-looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content.
          <strong>Purpose of Lorem Ipsum</strong>
        </p>
        <p className="text-base">
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software. Today
          it's seen all around the web; on templates, websites, and stock
          designs. Use our generator to get your own, or read on for the
          authoritative history of lorem ipsum.
          <strong>Popularity of Lorem Ipsum</strong>
        </p>
      </div>
    </Element>
  );
};

export default AboutUs;
  