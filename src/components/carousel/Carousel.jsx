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
];

const OfferCarousel = () => {
  const [index, setIndex] = useState(0);
  const [startSlide, setStartSlide] = useState(true);
  const slideshow = () => {
    if (startSlide) {
      setTimeout(() => {
        if (index < images?.length - 1) {
          let newIndex = index;
          setIndex(newIndex + 1);
        } else {
          setIndex(0);
        }
      }, 2000);
    }
  };

  const currentSlide = (n) => {
    setStartSlide(false);
    setIndex(n);
  };

  useEffect(() => {
    slideshow();
  }, [index]);
  return (
    <>
      <div className="slideshow-container">
        <div className=" fade">
          <img
            src={images[index]?.imgPath}
            style={{ width: "100%", height: "300px",
            transition: '799ms ease-in-out'}}
          />
        </div>
  
        <br />
        {index != 0 && (
          <a className="prev" onClick={() => currentSlide(index - 1)}>
            ❮
          </a>
        )}
        {index + 1 < images?.length && (
          <a className="next" onClick={() => currentSlide(index + 1)}>
            ❯
          </a>
        )}
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        {images.map((category) => {
          return (
            <>
              <span
                key={index}
                style={{
                  backgroundColor:
                    index + 1 === category?.id ? "black" : "grey",
                }}
                className="dot"
                onClick={() => currentSlide(category?.id - 1)}
              ></span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OfferCarousel;
