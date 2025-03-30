import { useGSAP } from "@gsap/react";
import React, { useState, useRef } from "react";
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";

const Header = () => {
  const logoRef = useRef(null);
  const [isDropped, setIsDropped] = useState(false);

  // Set initial position
  useGSAP(() => {
    gsap.set(logoRef.current, {
      top: "20px",
      left: "20px",
    });
  });

  const dropAndDrag = () => {
    gsap.to(logoRef.current, {
      top: isDropped ? "20px" : "82vh", // Use only 'top'
      duration: 1.5,
      ease: isDropped ?"" : "bounce.out",
    });
    setIsDropped(!isDropped);
  };

  return (
    <div className="fixed w-full flex justify-end items-center z-10 px-8 py-8">
      <img
        src="/logo.png"
        alt=""
        className="h-30 w-30 fixed"
        ref={logoRef}
        onClick={dropAndDrag}
        draggable="false"
      />
      
      <div className="flex items-center">
        <button className="bg-black border-4 text-xl px-4 py-2 hover:bg-gray-500 rounded-full">
          Hire me
        </button>
        <i className="ri-more-2-fill text-3xl ml-3"></i>
      </div>
    </div>
  );
};

export default Header;
