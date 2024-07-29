import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorCard from "./DoctorCard";
import DataContext from "../context/useContext";
import { useContext } from "react";
import "./SliderCustom.css"; // Import your custom CSS

function Responsive() {
  const { doctorList } = useContext(DataContext);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Disable next and previous buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 pb-16">
      <div className="slider-container max-w-9xl w-[92%] mx-auto">
        <Slider {...settings}>
          {doctorList?.map((val, i) => (
            <div key={i}>
              <DoctorCard
                name={val?.name}
                url={val?.url}
                specialist={val?.specialist}
                btnLink={val?.btnLink}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
