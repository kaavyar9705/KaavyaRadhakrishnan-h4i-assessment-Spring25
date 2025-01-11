import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import "./DisplayPage.css";

const DisplayPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? results.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="display-page">
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="gallery-container">
        <button className="nav-button1" onClick={handlePrevious}>
          
        </button>
        <GalleryCard
          image={results[currentIndex].links[0].href}
          title={results[currentIndex].data[0].title}
          description={results[currentIndex].data[0].description}
          dateCreated={results[currentIndex].data[0].date_created}
        />
        <button className="nav-button2" onClick={handleNext}>
          
        </button>
      </div>
    </div>
  );
};

export default DisplayPage;
