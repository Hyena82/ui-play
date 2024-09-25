import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";

const FixedBox = styled(motion.div)`
  position: fixed;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 3;

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    animation: bounce 3s infinite;
    background-color: #33a0d6;
    width: 100px;
    height: 100px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-30%);
    }
  }
`;

const ScrollTriggeredBox = () => {
  const { scrollY } = useScroll();
  const isMobile = window.innerWidth <= 768; // Mobile check, can customize

  // Define scroll input range (based on scrollY)
  const inputRange = [0, 500, 700, 1000, 1500, 2300, 3500]; // Customize these ranges as needed

  // X and Y transform arrays for both mobile and desktop
  const xScrollArray = isMobile
    ? [100, -100, -100, 100, -100, 100, 100] // Alternating right to left and left to right for mobile
    : [400, -500, -500, 500, -500, 400, 400]; // Alternating right to left and left to right for desktop

  const yScrollArray = isMobile
    ? [-200, -100, -100, 0, 200, 200, -600] // Keeping the same y positions for mobile
    : [-200, -100, -100, 0, 200, 200, -600];

  // UseTransform to create transform values based on scroll position
  const xTransform = useTransform(scrollY, inputRange, xScrollArray);
  const yTransform = useTransform(scrollY, inputRange, yScrollArray);

  // UseSpring to smooth the transform values
  const springConfig = { stiffness: 100, damping: 30 }; // Customize spring stiffness/damping
  const xSpring = useSpring(xTransform, springConfig);
  const ySpring = useSpring(yTransform, springConfig);

  return (
    <FixedBox style={{ x: xSpring, y: ySpring }}>
      <div className="content-box">Im chicken</div>
    </FixedBox>
  );
};

export default ScrollTriggeredBox;
