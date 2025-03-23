import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css"; // ✅ Ensure this is correct
import { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
// Import Images
import housing from "../assets/housing.png";
import agriculture from "../assets/agriculture.jpg";
import education from "../assets/education.jpg";
import mgnrega from "../assets/mgnrega.jpg";
import gas from "../assets/pmuy.jpg";
import solar from "../assets/electricity.jpg";
import HomePage from "./NewsHighlightsComponent";

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div
        id="heroCarousel"
        className={`carousel slide ${styles.carouselContainer}`} // ✅ Using styles properly
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-indicators">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {[
            {
              img: housing,
              title: "Affordable Housing",
              desc: "Providing homes for families.",
            },
            {
              img: agriculture,
              title: "Agriculture Support",
              desc: "Empowering farmers.",
            },
            {
              img: education,
              title: "Education for All",
              desc: "Scholarships for students.",
            },
            {
              img: mgnrega,
              title: "MGNREGA",
              desc: "Employment for rural areas.",
            },
            {
              img: gas,
              title: "Gas Connection for Houses",
              desc: "Ujjwala Yojana gas support.",
            },
            {
              img: solar,
              title: "Solar Energy Scheme",
              desc: "Clean and renewable power.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.img} className="d-block w-100" alt={item.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls (Arrows) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Content Below Carousel */}

      <HomePage />
    </div>
  );
};

export default Home;
