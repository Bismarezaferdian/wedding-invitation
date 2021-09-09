import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImageOne from "../../Images/img-thumbnail.jpg";
import ImageTwo from "../../Images/image-bg2.jpg";
import ImageThree from "../../Images/image-bg3.jpg";
import {
  SliderContainer,
  SliderWrapp,
  SlideKonten,
  SlideImage,
  TitleSlide,
} from "./SliderElement";

const DataSlider = [
  {
    image: ImageOne,
    elt: "text",
  },
  {
    image: ImageTwo,
    elt: "text",
  },
  {
    image: ImageThree,
    elt: "text",
  },
];

function Slider() {
  return (
    <SliderContainer id="Gallery">
      <TitleSlide>Gallery</TitleSlide>
      <SliderWrapp>
        <Slide arrows={false} easing="ease">
          {DataSlider.map((item, index) => (
            <SlideKonten key={index}>
              <SlideImage src={item.image} alt={item.alt} />
            </SlideKonten>
          ))}
        </Slide>
      </SliderWrapp>
    </SliderContainer>
  );
}

export default Slider;
