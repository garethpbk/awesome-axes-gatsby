import React, { useState } from "react";

// import styled components
import { CarouselContent, CarouselSlide, CarouselWrapper } from "./styled";

const slides = ["red", "blue", "green", "coral"];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const advanceSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current => current + 1);
    }
  };

  const backSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current => current - 1);
    }
  };

  return (
    <>
      <CarouselWrapper>
        <CarouselContent current={current}>
          {slides.map((slide, i) => (
            <CarouselSlide key={`slide-${i}`} color={slide}>
              {i + 1}
            </CarouselSlide>
          ))}
        </CarouselContent>
      </CarouselWrapper>
      <div>
        {slides.map((slide, i) => (
          <span
            style={{
              height: "25px",
              width: "25px",
              color: "white",
              display: "inline-block",
            }}
            onClick={() => setCurrent(i)}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <button onClick={backSlide}>Previous</button>
      <button onClick={advanceSlide}>Next</button>
    </>
  );
};

export default Carousel;
