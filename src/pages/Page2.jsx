import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const textRefs = useRef([]);

  useGSAP(() => {

    gsap.set('#section', {
        perspective: 3000,
        overflow: 'hidden',
    });
    
    textRefs.current.forEach((el) => {
      gsap.from(el, {
        rotateX: -80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        //   once: false, 
        },
      });
    });
  });

  return (
    <div id="section" className="bg-white text-center p-15 text-black">
      <h3 className="text-gray-500 text-xl">© 2025 Adityasingh.tech® | All rights reserved.</h3>
      {["DESIGN-DRIVEN", "DEVELOPMENT", "FOR", "SEAMLESS", "EXPERIENCES"].map((text, index) => (
        <div key={index} ref={(el) => (textRefs.current[index] = el)} className="font-[anzo]">
          <h1 className="text-[30vw] text-black leading-[28vw]">{text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Page2;
