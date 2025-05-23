import { useGSAP } from "@gsap/react";
import React, { useState, useRef } from "react";
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);
  const [isDropped, setIsDropped] = useState(false);
  const [pastPage1, setPastPage1] = useState(false);

  // Set initial position and scroll trigger
  useGSAP(() => {
    gsap.set(logoRef.current, {
      top: "20px",
      left: "20px",
    });
    
    // Create scroll trigger to detect when page1 is scrolled past
    ScrollTrigger.create({
      trigger: "#section", // ID of your Page2 element
      start: "top 10%",    // When top of Page2 is 10% from the top of viewport
      onEnter: () => setPastPage1(true),
      onLeaveBack: () => setPastPage1(false),
      markers: false       // Set to true during development to see trigger points
    });
  });

  const dropAndDrag = () => {
    gsap.to(logoRef.current, {
      top: isDropped ? "20px" : "82vh",
      duration: 1.5,
      ease: isDropped ? "power2.out" : "bounce.out",
    });
    setIsDropped(!isDropped);
  };

  return (
    <div className="fixed w-full flex justify-end items-center z-10 px-8 py-8">
      <img
        src={pastPage1 ? "/favicon.png" : "/logo.png"} 
        alt=""
        className="h-30 w-30 fixed"
        ref={logoRef}
        onClick={dropAndDrag}
        draggable="false"
      />
      
      <div className="flex items-center">
        <button className="bg-black border-3 text-xl px-4 py-2 hover:bg-gray-500 rounded-full">
          Hire Me
        </button>
        <i className="ri-more-2-fill text-3xl ml-3 text-gray-500"></i>
      </div>
    </div>
  );
};

export default Header;