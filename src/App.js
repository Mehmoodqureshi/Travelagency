import React, { useState, useEffect } from "react";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel"; // Fix the typo here
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Trucks from "./Trucks";
import Testimonials from "./Testimonials";
import ClientsSection from "./ClientsSection";

const navigation = [
  { name: "Dashboard", path: "/", target: "dashboard" },
  { name: "About Us", path: "/#about", target: "about" },
  { name: "Services", path: "/services", target: "services" },
  { name: "Trucks", path: "/Trucks", target: "Trucks" },
  { name: "Contact Us", path: "/contact", target: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollTo = (elementId) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      scroll.scrollTo(targetElement.offsetTop - 70, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
      setMenuOpen(false);
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTops = {
        dashboard: 0,
        about: document.getElementById("about")?.offsetTop,
        services: document.getElementById("services")?.offsetTop,
        Trucks: document.getElementById("Trucks")?.offsetTop,
      };

      let newActiveSection = "dashboard";
      Object.keys(sectionTops).forEach((section) => {
        if (
          sectionTops[section] !== null &&
          sectionTops[section] !== undefined &&
          scrollPosition >= sectionTops[section] - 70
        ) {
          newActiveSection = section;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <nav className="bg-yellow-600 relative px-2 py-2 flex gap-72 justify-left items-center">
        <div className="flex flex-shrink-0 items-center">
          <img
            src="/pic.jpg"
            alt=""
            className="w-16 h-16 rounded-full border-2 border-black"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="sm:hidden ml-auto text-white cursor-pointer focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={classNames(
            "hidden",
            "sm:flex",
            "ml-6",
            "space-x-6",
            "items-center"
          )}
        >
          {navigation.map((item) => (
            <React.Fragment key={item.name}>
              {item.name === "About Us" ||
              item.name === "Services" ||
              item.name === "Trucks" ? (
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className={classNames(
                    "text-white",
                    "hover:bg-gray-700",
                    "px-3 py-2",
                    "text-lg font-medium",
                    {
                      "bg-gray-700":
                        isMenuOpen && activeSection === item.target,
                    }
                  )}
                  onClick={() => scrollTo(item.target)}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={item.path}
                  className={classNames(
                    "text-white",
                    "hover:bg-gray-700",
                    "px-3 py-2",
                    "text-lg font-medium",
                    { "bg-gray-700": item.current }
                  )}
                >
                  {item.name}
                </RouterLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* Burger Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          {navigation.map((item) => (
            <React.Fragment key={item.name}>
              {item.name === "About Us" ||
              item.name === "Services" ||
              item.name === "Trucks" ? (
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className={classNames(
                    "text-gray-700 hover:bg-gray-200 px-4 py-2",
                    "font-medium"
                  )}
                  onClick={() => scrollTo(item.target)}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={item.path}
                  className={classNames(
                    "text-gray-700 hover:bg-gray-200 px-4 py-2",
                    "font-medium"
                  )}
                >
                  {item.name}
                </RouterLink>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <div id="about" className="ml-8 mt-12 flex items-center">
                <div className="w-8 h-10 relative">
                  <div className="w-5 h-10 bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="text-gray-700 text-base font-semibold font-['Poppins'] leading-tight">
                    About Us
                  </div>
                </div>
              </div>
              <AboutUs />
              <div id="services" className="ml-8 mt-12 flex items-center">
                <div className="w-8 h-10 relative">
                  <div className="w-5 h-10 bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="text-gray-700 text-base font-semibold font-['Poppins'] leading-tight">
                    Our Services
                  </div>
                </div>
              </div>
              <Services />
              <div id="services" className="ml-8 mt-12 flex items-center">
                <div className="w-8 h-10 relative">
                  <div className="w-5 h-10 bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="text-gray-700 text-base font-semibold font-['Poppins'] leading-tight">
                    Types Of Truck
                  </div>
                </div>
              </div>
              <Trucks />
              <Testimonials />
              {/* <div id="services" className="ml-8 mt-12 flex items-center">
                <div className="w-8 h-10 relative">
                  <div className="w-5 h-10 bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="text-gray-700 text-base font-semibold font-['Poppins'] leading-tight">
                    Clients
                  </div>
                </div>
              </div>
              <ClientsSection /> */}
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default MyComponent;
