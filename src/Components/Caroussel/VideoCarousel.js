import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
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
  const [fade, setFade] = useState(false);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  const videos = useMemo(() => [video1, video2, video3, video4], []);
  const currentText = videoTexts[currentIndex];

  useEffect(() => {
    videos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video;
      videoElement.preload = "auto";
    });
  }, [videos]);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: "100%" },
        { opacity: 1, x: "0%", duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }
  }, [currentIndex]);

  useEffect(() => {
    const fadeDuration = 1;
    const fadeStartBeforeEnd = 2000;
    const videoDuration = currentIndex === 1 ? 7000 : 9000;

    const interval = setInterval(() => {
      setFade(true);
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: fadeDuration,
        ease: "power3.out",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
          setFade(false);
          gsap.set(videoRef.current, { opacity: 1 });
        },
      });
    }, videoDuration - fadeStartBeforeEnd);

    return () => clearInterval(interval);
  }, [currentIndex, videos.length]);

  const handleVideoEnd = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  };

  return (
    <div className="carousel-container">
      <video
        ref={videoRef}
        className={`carousel-video ${fade ? "fade-out" : "fade-in"}`}
        autoPlay
        muted
        playsInline
        loop
        key={currentIndex}
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div ref={textRef} className="carousel-text">
        {currentText}
      </div>
    </div>
  );
};

export default VideoCarousel;
