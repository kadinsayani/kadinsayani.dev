import { useState } from "react";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const Slide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#151515",
    color: "#edf5fc",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide} style={buttonStyle}>
        <IoArrowBack />
      </button>
      <img
        src={images[currentIndex].url}
        alt={`Slide ${currentIndex}`}
        style={{ width: "600px", height: "400px", borderRadius: "10px" }}
      />
      <button onClick={nextSlide} style={buttonStyle}>
        <IoArrowForward />
      </button>
    </div>
  );
};

Slide.propTypes = {
  images: PropTypes.array,
};

export default Slide;
