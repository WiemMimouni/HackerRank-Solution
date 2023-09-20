import React, { useState } from "react";

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper function to go to the next slide
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Helper function to go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Helper function to restart the slideshow
  const restartSlideshow = () => {
    setCurrentIndex(0);
  };

  // Get the current slide data
  const currentSlide = slides[currentIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restartSlideshow}
          disabled={currentIndex === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
