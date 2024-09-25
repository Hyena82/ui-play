import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const FixedBox = styled(motion.div)`
  position: fixed;
  width: 100px;
  height: 100px;
  background-color: #33a0d6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    animation: bounce 3s infinite;
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

const positions = [
  { x: -200, y: 0 },
  { x: 0, y: -200 },
  { x: 200, y: 0 },
  { x: 0, y: 200 },
  { x: -200, y: 200 },
];

const ScrollTriggeredBox = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = window.innerHeight;
    const newPage = Math.floor(scrollPosition / pageHeight);

    setCurrentPage(newPage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FixedBox
      animate={{
        x: positions[currentPage].x,
        y: positions[currentPage].y,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="content-box">Im chicken</div>
    </FixedBox>
  );
};

export default ScrollTriggeredBox;
