import React, { useEffect } from "react";
import img1 from "../../Assets/Images/aircon3.png";
import img2 from "../../Assets/Images/installation.png";
import img3 from "../../Assets/Images/maintenance.png";
import "./Slider.css";

const Slider = () => {
  const items = [
    {
      id: 1,
      img: img3,
      title: "Comprehensive Maintenance Plans",
      topic: "Keep Your System in Top Shape",
      description:
        "Enroll in our maintenance program to extend the life of your air conditioning unit and ensure its efficiency.",
      detailTitle: "Tailored Maintenance Solutions",
      detailDescription:
        "Regular check-ups and servicing can help prevent costly repairs and keep your home comfortable all year.",
      specifications: [],
    },
    {
      id: 2,
      img: img1,
      title: "Premium Air Conditioning Systems",
      topic: "Stay Cool All Year Round",
      description:
        "Discover our top-of-the-line air conditioning solutions designed for optimal comfort and energy efficiency.",
      detailTitle: "Why Choose Us?",
      detailDescription:
        "Our air conditioners not only cool your space effectively but also come with energy-saving technology to reduce your bills.",
      specifications: [
        { name: "Cooling Capacity", value: "Up to 24,000 BTU" },
        { name: "Energy Rating", value: "High Efficiency (SEER 18+)" },
        { name: "Warranty", value: "5 Years" },
        { name: "Noise Level", value: "20 - 55 dB" },
        { name: "Power Supply", value: "220-240V / 50Hz" },
        { name: "Refrigerant Type", value: "R-410A" },
      ],
    },
    {
      id: 3,
      img: img2,
      title: "Expert Installation Services",
      topic: "Seamless and Professional Installation",
      description:
        "Trust our certified technicians for a hassle-free installation experience, ensuring your system runs at peak performance.",
      detailTitle: "Installation You Can Rely On",
      detailDescription:
        "We guarantee a fast, reliable installation process, so you can enjoy comfort without delays.",
      specifications: [],
    },
  ];

  useEffect(() => {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const carousel = document.querySelector(".carousel");
    const listHTML = document.querySelector(".carousel .list");
    const seeMoreButtons = document.querySelectorAll(".seeMore");
    const backButton = document.getElementById("back");

    let unAcceptClick;

    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = document.querySelectorAll(".carousel .list .item");
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }
      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton.onclick = () => showSlider("next");
    prevButton.onclick = () => showSlider("prev");

    seeMoreButtons.forEach((button) => {
      button.onclick = () => {
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove("showDetail");
    };

    return () => {
      nextButton.onclick = null;
      prevButton.onclick = null;
      seeMoreButtons.forEach((button) => (button.onclick = null));
      backButton.onclick = null;
    };
  }, []);

  return (
    <div>
      <div className="carousel">
        <div className="list">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore">SEE MORE &#8599;</button>
              </div>
              <div className="detail">
                <div className="title">{item.detailTitle}</div>
                <div className="des">{item.detailDescription}</div>
                <div className="specifications">
                  {item.specifications.map((spec, index) => (
                    <div key={index}>
                      <p>{spec.name}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <button id="back">See All &#8599;</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
