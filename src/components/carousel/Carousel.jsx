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

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide.direction === "forward") {
        if (currentSlide.slide === 4) {
          setslide({ slide: 3, direction: "b" });
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
  }, [currentSlide.slide]);

  return (
    <div className="carousel">
      <button style={{ left: 0 }} className="changeButton">
        <span className="arrow"></span>
      </button>
      <button style={{ right: 0 }} className="changeButton">
        <span className="right"></span>
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
