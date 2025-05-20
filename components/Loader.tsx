"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import "./loader.css";

const Loader = () => {
  const numBars = 30;

  useEffect(() => {
  // Animate bars to shrink
  gsap.to(".bar", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.5,
    stagger: 0.05,
    ease: "power2.inOut",
    delay: 1.2,
  });

  // Fade out "Loading..." text
  gsap.to(".loading-text", {
    opacity: 0,
    duration: 0.8,
    delay: 2.2,
    ease: "power2.inOut",
  });

  // Split black background panels
  gsap.to(".left-panel", {
    x: "-100%",
    duration: 1.2,
    delay: 3.0,
    ease: "power2.inOut",
  });

  gsap.to(".right-panel", {
    x: "100%",
    duration: 1.2,
    delay: 3.0,
    ease: "power2.inOut",
  });

  // Fade out loader container
  gsap.to(".loader-container", {
    opacity: 0,
    duration: 0.5,
    delay: 4.2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.set(".loader-container", { display: "none" });
    },
  });
}, []);




  return (
    <div className="loader-container">
  <div className="bars-overlay">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="bar"
        style={{
          background:"linear-gradient(225deg, #7f1d1d 0%,#000000 100%)",
        }}
      />
    ))}
  </div>

  <div className="loading-text">Loading...</div>

  {/* Split panels for final animation */}
  <div className="split-panel left-panel"></div>
  <div className="split-panel right-panel"></div>
</div>

  );
};

export default Loader;
