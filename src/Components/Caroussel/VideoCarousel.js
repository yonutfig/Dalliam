import React, { useState, useEffect, useMemo, useCallback } from "react";
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

const videoDurations = [9000, 7000, 9000, 9000];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videos = useMemo(() => [video1, video2, video3, video4], []);

  const preloadNextVideo = useCallback(
    (nextIndex) => {
      const nextVideo = document.createElement("video");
      nextVideo.src = videos[nextIndex];
      nextVideo.preload = "auto";
    },
    [videos]
  );

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    preloadNextVideo(nextIndex);

    const videoDuration = videoDurations[currentIndex];
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, videoDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, videos, preloadNextVideo]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const currentText = videoTexts[currentIndex];

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
          loop={false}
          onCanPlayThrough={handleVideoLoad}
          initial={{ opacity: 0, scale: 1.1, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, pointerEvents: "none" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
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
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        style={{ willChange: "opacity, transform" }}
      >
        {currentText}
      </motion.div>
    </div>
  );
};

export default VideoCarousel;
