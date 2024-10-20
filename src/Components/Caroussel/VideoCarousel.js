import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./VideoCarousel.css";

import video1 from "../../Assets/Videos/Human-Hand-Activating-Air-Conditioner-With-Remote-2024-05-14-18-51-02-Utc.mp4";
import video2 from "../../Assets/Videos/Air-Heat-Pump-On-White-Background-2023-12-01-01-15-03-Utc.mp4";
import video3 from "../../Assets/Videos/Business-Employee-And-Woman-With-A-Tablet-Intern-2023-11-27-05-22-27-Utc.mp4";
import video4 from "../../Assets/Videos/Workers-Servicing-Air-Conditioner-2023-11-27-05-23-42-Utc.mp4";

const videoTexts = [
  "Air Conditioning Solutions",
  "Efficient Heat Pumps",
  "Customer Satisfaction Guaranteed",
  "Reliable Maintenance Service",
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videos = useMemo(() => [video1, video2, video3, video4], []);

  useEffect(() => {
    const preloadVideos = () => {
      videos.forEach((video) => {
        const vid = new Image();
        vid.src = video;
      });
    };
    preloadVideos();
  }, [videos]);

  const currentText = videoTexts[currentIndex];

  useEffect(() => {
    const videoDuration = currentIndex === 1 ? 7000 : 9000;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, videoDuration);

    return () => clearInterval(interval);
  }, [currentIndex, videos.length]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="carousel-container">
      {!isVideoLoaded && <div className="loading-spinner">Loading...</div>}
      <AnimatePresence mode="wait">
        <motion.video
          key={currentIndex}
          src={videos[currentIndex]}
          className="carousel-video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          initial={{ opacity: 0, scale: 1.1, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, pointerEvents: "none" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onCanPlayThrough={handleVideoLoad}
          style={{ willChange: "opacity, transform" }}
        >
          Your browser does not support the video tag.
        </motion.video>
      </AnimatePresence>
      <motion.div
        className="carousel-text"
        key={currentText}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        style={{ willChange: "opacity, transform" }}
      >
        {currentText}
      </motion.div>
    </div>
  );
};

export default VideoCarousel;
