import React, { useState, useEffect, useMemo } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videos = useMemo(() => [video1, video2, video3, video4], []);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videos.length;

    const nextVideo = document.createElement("video");
    nextVideo.src = videos[nextIndex];
    nextVideo.preload = "auto";

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      }, 1000);
    }, videoDurations[currentIndex]);

    return () => clearTimeout(timer);
  }, [currentIndex, videos]);

  return (
    <div className="carousel-container">
      <video
        id="carousel-video"
        className={`carousel-video ${isTransitioning ? "fade-out" : "fade-in"}`}
        src={videos[currentIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="carousel-text">{videoTexts[currentIndex]}</div>
    </div>
  );
};

export default VideoCarousel;
