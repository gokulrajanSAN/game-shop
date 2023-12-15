import { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
  {
    label: "Iphone",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ec32763f1308eb96.jpg?q=20",
  },
  {
    label: "Spiceject",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/17821708e64ed52d.jpg?q=20",
  },
  {
    label: "Sale",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a2d45385904d2bfa.jpg?q=20",
  },
  {
    label: "Laptop",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20",
  },
  {
    label: "Zebronics",
    imgPath:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20",
  },
];

const OfferCarousel = () => {
  const [currentSlide, setslide] = useState({ slide: 0, direction: "forward" });
  const handlePrev = () => {
    if (currentSlide.slide > 0) {
      setslide({ ...currentSlide, slide: currentSlide.slide - 1 });
    } else {
      setslide({ ...currentSlide, slide: images.length - 1 });
    }
  };
  const handleNext = () => {
    if (currentSlide.slide < images.length - 1) {
      setslide({ ...currentSlide, slide: currentSlide.slide + 1 });
    } else {
      setslide({ ...currentSlide, slide: 0});
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentSlide.direction === "forward") {
        if (currentSlide.slide === images.length - 1) {
          setslide({ slide: images.length - 2, direction: "b" });
        } else {
          setslide({ ...currentSlide, slide: currentSlide.slide + 1 });
        }
      } else {
        if (currentSlide.slide === 0) {
          setslide({ slide: 1, direction: "forward" });
        } else {
          setslide({ ...currentSlide, slide: currentSlide.slide - 1 });
        }
      }
    }, 2900);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentSlide.slide]);

  return (
    <div className="carousel">
      <button className="prevButton" onClick={handlePrev}>
        <span className="arrow prevArrow" />
      </button>
      <button className="nextButton" onClick={handleNext}>
        <span className="arrow" />
      </button>
      {images.map((img) => (
        <img
          alt={img.label}
          key={img.label}
          src={img.imgPath}
          style={{
            translate: `${-100 * currentSlide.slide}%`,
            transition: "999ms ease-in-out",
            width: "100%",
          }}
        />
      ))}
      <div className="slider">
        <div className="circleContainer">
          <div className="circleLayout">
            {Array(images.length)
              .fill(0)
              .map((num, i) => (
                <div key={i} className="circle" />
              ))}
            <div
              className="worm"
              style={{
                transform: `translateX(${
                  currentSlide.slide * 12
                }px) scaleX(1) `,
                transition: "all 999ms ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCarousel;
