import React, { useRef } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);

  useGSAP(() => {
    // Initial setup if needed
    gsap.set(tiltRef.current, { 
      transformPerspective: 1000,
      transformOrigin: "center center"
    });
  });
  
  const mouseMoving = (e) => {
    if (!tiltRef.current) return;
    
    const rect = tiltRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate mouse distance from center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Convert to limited rotation angles (max ±10 degrees)
    const rotateY = (mouseX * 10) / (rect.width / 2);
    const rotateX = (-mouseY * 10) / (rect.height / 2);

    if (e.clientX < 2 * centerX || e.clientY < -(2 * centerY)) {
      // Use GSAP to animate the transform
      gsap.to(tiltRef.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5, // Animation duration in seconds
        ease: "power2.out", // Easing function for smooth animation
        overwrite: "auto" // Handles multiple rapid animations
      });
    } else {
      // Reset to initial position
      gsap.to(tiltRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  };
  return (
    <div className="h-screen px-4 py-4 bg-white">
      <div
        onMouseMove={(e) => {
          mouseMoving(e);
        }}
        className=" pt-30 shadow-xl shadow-gray-700 h-full w-full rounded-3xl bg-[url(/portfolio.jpg)] bg-cover bg-no-repeat bg-[right_50%_top_30%] "
      >
        <TiltText tiltRef={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
